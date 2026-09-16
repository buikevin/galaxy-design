#!/usr/bin/env node
/**
 * Bootstrap manifests for every component already installable via the CLI
 * registries. Pilot manifests are preserved. Framework-local props, selector,
 * providers, and public exports are extracted from CLI registry data and the
 * real source files so generated CLI registries stay faithful.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  collectIssues,
  contractsRoot,
  FRAMEWORK_DIRS,
} from './lib/manifests.mjs';
import { mergeNormalizedProps } from './lib/props.mjs';

const repoRoot = resolve(contractsRoot, '..', '..');
const cliRoot = resolve(repoRoot, '..', 'galaxy-design-cli');

const FRAMEWORKS = ['react', 'vue', 'angular', 'react-native', 'flutter'];
const PILOT_IDS = new Set([
  'button',
  'dialog',
  'select',
  'date-picker',
  'gauge-chart',
  'toast',
  'toolbar',
]);

const CLI_REGISTRY_FILES = {
  react: 'registry-react.json',
  vue: 'registry-vue.json',
  angular: 'registry-angular.json',
  'react-native': 'registry-react-native.json',
  flutter: 'registry-flutter.json',
};

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf-8'));
}

function readText(path) {
  return existsSync(path) ? readFileSync(path, 'utf-8') : '';
}

function extractNamedExports(entryContent) {
  const names = new Set();
  for (const match of entryContent.matchAll(/export\s+(?:type\s+)?\{([^}]*)\}/g)) {
    for (const raw of match[1].split(',')) {
      const trimmed = raw.trim();
      if (!trimmed) continue;
      if (/^type\s/.test(trimmed)) continue;
      const alias = trimmed.match(/^(?:type\s+)?(.+?)\s+as\s+([A-Za-z_$][\w$]*)$/);
      const name = alias ? alias[2] : trimmed.replace(/^type\s+/, '');
      if (/^[A-Za-z_$][\w$]*$/.test(name)) names.add(name);
    }
  }
  return names;
}

function extractDeclaredExports(content) {
  const names = new Set();
  for (const match of content.matchAll(
    /export\s+(?:default\s+)?(?:abstract\s+)?(?:const|let|var|async\s+function|function|class|interface|enum)\s+([A-Za-z_$][\w$]*)/g,
  )) {
    names.add(match[1]);
  }
  return names;
}

function filterExportsForAudit(framework, exports) {
  if (framework !== 'angular' && framework !== 'react-native') {
    return exports;
  }
  return exports.filter((name) => /^[A-Z]/.test(name) || /^use[A-Z]/.test(name));
}

function extractDartExports(content) {
  const names = new Set();
  for (const match of content.matchAll(
    /\b(?:abstract\s+)?(?:final\s+)?class\s+([A-Za-z_$][\w$]*)/g,
  )) {
    names.add(match[1]);
  }
  for (const match of content.matchAll(/\benum\s+([A-Za-z_$][\w$]*)/g)) {
    names.add(match[1]);
  }
  return names;
}

function extractAuditExports(entryContent) {
  const names = new Set();
  for (const match of entryContent.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const raw of match[1].split(',')) {
      const trimmed = raw.trim();
      if (!trimmed || /^type\s/.test(trimmed)) continue;
      const alias = trimmed.match(/^(.+?)\s+as\s+([A-Za-z_$][\w$]*)$/);
      const name = alias ? alias[2] : trimmed;
      if (/^[A-Z]/.test(name)) names.add(name);
    }
  }
  return names;
}

function componentDirRelative(framework, id) {
  const dirs = {
    react: 'packages/react/src/components',
    vue: 'packages/vue/src/components',
    angular: 'packages/angular/src/components',
    'react-native': 'packages/react-native/src/components',
    flutter: 'packages/flutter/lib/components',
  };
  return join(dirs[framework], id);
}

function readFileSyncSafe(path) {
  return existsSync(path) ? readFileSync(path, 'utf-8') : '';
}

function componentDir(framework, id) {
  return join(repoRoot, componentDirRelative(framework, id));
}

function main() {
  const registries = {};
  for (const framework of Object.keys(CLI_REGISTRY_FILES)) {
    registries[framework] = readJson(
      join(cliRoot, 'src', 'registries', CLI_REGISTRY_FILES[framework]),
    ).components;
  }

  const ids = new Set();
  for (const components of Object.values(registries)) {
    for (const id of Object.keys(components)) ids.add(id);
  }

  const manifestDir = join(contractsRoot, 'manifests');
  mkdirSync(manifestDir, { recursive: true });

  let created = 0;
  const drift = [];

  for (const id of [...ids].sort()) {
    if (PILOT_IDS.has(id)) continue;

    const frameworks = {};
    for (const framework of Object.keys(CLI_REGISTRY_FILES)) {
      const entry = registries[framework][id];
      if (!entry) {
        frameworks[framework] = {
          status: 'missing',
          files: [],
          notes: 'Not present in the CLI registry for this framework.',
        };
        continue;
      }

      const dir = componentDir(framework, id);
      const entryName =
        framework === 'flutter' ? 'index.dart' : 'index.ts';
      const entryPath = join(dir, entryName);
      const hasEntry = existsSync(entryPath);
      const entryContent = readFileSyncSafe(entryPath);

      let exports = [];
      if (framework === 'flutter') {
        const source = entry.files
          .map((file) => readFileSyncSafe(join(dir, file)))
          .join('\n');
        exports = [...extractDartExports(source)];
      } else if (framework === 'angular' || framework === 'react-native') {
        const source = entry.files
          .map((file) => readFileSyncSafe(join(dir, file)))
          .join('\n');
        if (hasEntry && /export\s*\{/.test(entryContent)) {
          exports = [...extractAuditExports(entryContent)];
        } else {
          exports = [...extractDeclaredExports(source)].filter((name) =>
            /^[A-Z]/.test(name),
          );
        }
      } else {
        if (hasEntry && /export\s+(?:type\s+)?\{/.test(entryContent)) {
          exports = [...extractNamedExports(entryContent)];
        } else {
          const source = entry.files
            .map((file) => readFileSyncSafe(join(dir, file)))
            .join('\n');
          exports = [...extractDeclaredExports(source)];
        }
      }

      const impl = {
        status: 'complete',
        files: entry.files,
        exports,
        dependencies: entry.dependencies || [],
        devDependencies: entry.devDependencies || [],
        peerDependencies: entry.peerDependencies || [],
        registryDependencies: entry.registryDependencies || [],
        props: entry.props || [],
      };
      if (hasEntry) impl.entry = entryName;
      if (entry.selector) impl.selector = entry.selector;
      if (entry.providers) impl.providers = entry.providers;

      frameworks[framework] = impl;
    }

    const reference = frameworks.react.status !== 'missing'
      ? frameworks.react
      : Object.values(frameworks).find((impl) => impl.status !== 'missing');

    const frameworkProps = {};
    for (const framework of Object.keys(CLI_REGISTRY_FILES)) {
      if (frameworks[framework].status !== 'missing') {
        frameworkProps[framework] = frameworks[framework].props || [];
      }
    }

    const manifest = {
      $schema: '../schemas/component-manifest.schema.json',
      id,
      name: reference?.name || id,
      category: reference?.category || 'other',
      status: 'complete',
      description: reference?.description || id,
      props: mergeNormalizedProps(frameworkProps),
      children: [],
      frameworks,
      notes: [
        'Bootstrapped from the CLI framework registries; normalized props are merged from framework-local registry props.',
      ],
    };

    const issues = collectIssues(manifest);
    if (issues.length) {
      drift.push({ id, issues });
      continue;
    }

    const file = join(manifestDir, `${id}.json`);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, `${JSON.stringify(manifest, null, 2)}\n`);
    created += 1;
  }

  console.log(`Bootstrapped ${created} manifests.`);
  if (drift.length) {
    console.error(`${drift.length} component(s) had drift and were skipped:`);
    for (const { id, issues } of drift) {
      console.error(`- ${id}`);
      for (const issue of issues.slice(0, 4)) {
        console.error(`  - ${issue}`);
      }
    }
    process.exitCode = 1;
  }
}

main();
