import { readFileSync, readdirSync } from 'node:fs';
import { basename, dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const contractsRoot = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  '..'
);
const repoRoot = resolve(contractsRoot, '..', '..');

const FRAMEWORK_DIRS = {
  react: 'packages/react/src/components',
  vue: 'packages/vue/src/components',
  angular: 'packages/angular/src/components',
  'react-native': 'packages/react-native/src/components',
  flutter: 'packages/flutter/lib/components',
};

const FRAMEWORK_RUNTIME_PACKAGES = new Set([
  '@angular/common',
  '@angular/core',
  '@angular/forms',
  'react',
  'react-dom',
  'react-native',
  'rxjs',
  'vue',
]);

const TARGET_FRAMEWORK_MAP = {
  nextjs: 'react',
  nuxtjs: 'vue',
};

function readManifests() {
  const manifestDir = resolve(contractsRoot, 'manifests');
  const files = readdirSync(manifestDir(manifestDir))
    .filter((name) => extname(name) === '.json')
    .sort();
  return files.map((name) => ({
    file: join(manifestDir, name),
    manifest: JSON.parse(readFileSync(join(manifestDir, name), 'utf-8')),
  }));
}

function manifestDir(manifestDir) {
  return manifestDir;
}

function componentPath(framework, componentId, file) {
  return resolve(repoRoot, FRAMEWORK_DIRS[framework], componentId, file);
}

function getPackageName(specifier) {
  if (
    specifier.startsWith('.') ||
    specifier.startsWith('@/') ||
    specifier.startsWith('~/') ||
    specifier.startsWith('package:') ||
    specifier.startsWith('dart:') ||
    specifier.startsWith('node:')
  ) {
    return null;
  }
  return normalizePackageName(
    specifier.startsWith('@')
      ? specifier.split('/').slice(0, 2).join('/')
      : specifier.split('/')[0]
  );
}

function normalizePackageName(name) {
  if (!name) return null;
  return name.split(' ')[0].replace(/:$/, '');
}

const EXPORT_PATTERNS = [
  (name) => new RegExp(`export\\s+\\{[^}]*\\b${name}\\b`, 'm'),
  (name) => new RegExp(`export\\s+type\\s+\\{[^}]*\\b${name}\\b`, 'm'),
  (name) => new RegExp(`export\\s+\\{[^}]*\\bas\\s+${name}\\b`, 'm'),
  (name) =>
    new RegExp(
      `export\\s+(?:const|let|var|function|async function)\\s+${name}\\b`,
      'm'
    ),
  (name) =>
    new RegExp(`export\\s+(?:type|interface|class|enum)\\s+${name}\\b`, 'm'),
  (name) =>
    new RegExp(
      `export\\s+default\\s+(?:abstract\\s+)?(?:class|function)\\s+${name}\\b`,
      'm'
    ),
  (name) => new RegExp(`export\\s+(?:abstract\\s+)?class\\s+${name}\\b`, 'm'),
  (name) => new RegExp(`\\bfinal\\s+class\\s+${name}\\b`, 'm'),
  (name) => new RegExp(`\\benum\\s+${name}\\b`, 'm'),
  (name) => new RegExp(`\\b(?:abstract\\s+)?class\\s+${name}\\b`, 'm'),
  (name) => new RegExp(`\\bmixin\\s+${name}\\b`, 'm'),
  (name) => new RegExp(`\\bextension\\s+${name}\\b`, 'm'),
  (name) => new RegExp(`\\btypedef\\s+${name}\\b`, 'm'),
];

function hasExport(content, name) {
  return EXPORT_PATTERNS.some((build) => build(name).test(content));
}

export function collectIssues(manifest) {
  const issues = [];
  const implementedFrameworks = Object.entries(manifest.frameworks).filter(
    ([, impl]) => impl.status !== 'missing'
  );

  for (const [framework, impl] of implementedFrameworks) {
    const componentRoot = resolve(
      repoRoot,
      FRAMEWORK_DIRS[framework],
      manifest.id
    );

    if (!('props' in impl)) {
      issues.push(
        `[${manifest.id}/${framework}] missing framework-local props list (must exist, even if empty)`
      );
    }

    for (const file of impl.files) {
      if (!existsSyncQuiet(join(componentRoot, file))) {
        issues.push(`[${manifest.id}/${framework}] missing file: ${file}`);
      }
    }

    const sourceFiles = impl.files
      .map((file) => join(componentRoot, file))
      .filter((path) => existsSyncQuiet(path));

    const sources = sourceFiles.map((path) => readFileSync(path, 'utf-8'));

    const sourceText = sources.join('\n');

    for (const exportName of impl.exports || []) {
      if (!sources.some((content) => hasExport(content, exportName))) {
        issues.push(
          `[${manifest.id}/${framework}] missing export: ${exportName}`
        );
      }
    }

    const declaredPackages = new Set(
      [
        ...(impl.dependencies || []),
        ...(impl.devDependencies || []),
        ...(impl.peerDependencies || []),
      ]
        .map(getPackageName)
        .filter(Boolean)
    );

    for (const sourcePath of sourceFiles) {
      const isDart = extname(sourcePath).endsWith('.dart');
      const sourceText = readFileSync(sourcePath, 'utf-8');
      const importPattern =
        /(?:from\s+|import\s*\(?\s*|import\s+)['"]([^'"]+)['"]/g;
      for (const match of sourceText.matchAll(importPattern)) {
        const specifier = match[1];
        let packageName = null;
        if (isDartSource(framework)) {
          if (
            !specifier.startsWith('package:') &&
            !specifier.startsWith('dart:')
          ) {
            continue;
          }
          packageName = (() => {
            if (!specifier.startsWith('package:')) return null;
            const rest = specifier.slice('package:'.length);
            const first = rest.split('/')[0];
            const packageName = first.startsWith('@')
              ? rest.split('/').slice(0, 2).join('/')
              : first;
            return packageName === 'flutter' ? null : packageName;
          })();
        } else {
          packageName = getPackageName(specifier);
        }
        if (
          packageName &&
          !FRAMEWORK_RUNTIME_PACKAGES.has(packageName) &&
          !declaredPackages.has(packageName)
        ) {
          issues.push(
            `[${manifest.id}/${framework}] undeclared package: ${packageName}`
          );
        }
      }
    }

    if (impl.entry) {
      const entryPath = join(componentRoot, impl.entry);
      if (!existsSyncQuiet(entryPath)) {
        issues.push(
          `[${manifest.id}/${framework}] missing entry: ${impl.entry}`
        );
      } else {
        const entryContent = readFileSync(entryPath, 'utf-8');
        const wildcardEntry =
          /export\s+\*\s+from/.test(entryContent) ||
          /^\s*export\s+['"]/.test(entryContent);
        for (const exportName of impl.exports || []) {
          const entryHasExport = wildcardEntry
            ? sourceText.includes(exportName)
            : hasExport(entryContent, exportName);
          if (!entryHasExport) {
            issues.push(
              `[${manifest.id}/${framework}] export not re-exported from entry: ${exportName}`
            );
          }
        }
      }
    }
  }

  for (const prop of manifest.props) {
    for (const framework of prop.frameworks) {
      const targetFramework = TARGET_FRAMEWORK_MAP[framework] || framework;
      const impl = manifest.frameworks[targetFramework];
      if (!impl || impl.status === 'missing') {
        issues.push(
          `[${manifest.id}] prop "${prop.name}" references missing framework: ${framework}`
        );
      }
    }
    for (const framework of Object.keys(prop.overrides || {})) {
      const impl = manifest.frameworks[framework];
      if (!impl || impl.status === 'missing') {
        issues.push(
          `[${manifest.id}] prop "${prop.name}" overrides missing framework: ${framework}`
        );
      }
    }
  }

  for (const child of manifest.children || []) {
    const childFrameworks =
      child.frameworks || implementedFrameworks.map(([name]) => name);
    for (const framework of childFrameworks) {
      const impl = manifest.frameworks[framework];
      if (!impl || impl.status === 'missing') {
        issues.push(
          `[${manifest.id}] child "${child.name}" references missing framework: ${framework}`
        );
        continue;
      }
      const componentRoot = resolve(
        repoRoot,
        FRAMEWORK_DIRS[framework],
        manifest.id
      );
      const sources = impl.files
        .map((file) => join(componentRoot, file))
        .filter((path) => existsSyncQuiet(path))
        .map((path) => readFileSync(path, 'utf-8'));
      const exportName =
        (child.export && child.export[framework]) || child.name;
      if (
        exportName &&
        sources.length &&
        !sources.some((content) => hasExport(content, exportName))
      ) {
        issues.push(
          `[${manifest.id}/${framework}] child export not found in source: ${exportName}`
        );
      }
    }
  }

  return issues;
}

function existsSyncQuiet(path) {
  try {
    return statIsFile(path);
  } catch {
    return false;
  }
}

function isDartSource(framework) {
  return framework === 'flutter';
}

import { statSync } from 'node:fs';
function statIsFile(path) {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
}

export { contractsRoot, repoRoot, FRAMEWORK_DIRS };
