#!/usr/bin/env node
/**
 * P2.3 — Generate per-component code examples from manifests for docs.
 * Produces a JSON file with ready-to-render code snippets per framework
 * that the docs site can consume instead of manual markdown tables.
 */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const contractsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifestDir = join(contractsRoot, 'manifests');
const generatedRoot = join(contractsRoot, 'generated');

const FRAMEWORK_ORDER = ['react', 'vue', 'angular', 'react-native', 'flutter'];

const COMPONENT_IMPORT_PATHS = {
  react: (id) => `@/components/ui/${id}`,
  nextjs: (id) => `@/components/ui/${id}`,
  vue: (id) => `@/components/ui/${id}`,
  nuxtjs: (id) => `@/components/ui/${id}`,
  angular: (id) => `@/components/ui/${id}`,
};

const COMPONENT_IMPORT_PATTERNS = {
  react: (manifest, id) => {
    const mainExport = manifest.frameworks.react.exports?.[0];
    return mainExport
      ? `import { ${mainExport} } from '${COMPONENT_IMPORT_PATHS.react(id)}'`
      : null;
  },
  vue: (manifest, id) => {
    const mainExport = manifest.frameworks.vue.exports?.[0];
    return mainExport
      ? `import { ${mainExport} } from '${COMPONENT_IMPORT_PATHS.vue(
          id
        )}/index'`
      : null;
  },
  angular: (manifest, id) => {
    const mainExport = manifest.frameworks.angular.exports?.[0];
    return mainExport
      ? `import { ${mainExport} } from '${COMPONENT_IMPORT_PATHS.angular(
          id
        )}/index'`
      : null;
  },
};

function getFirstPropExample(manifest, framework) {
  const impl = manifest.frameworks[framework];
  const props = impl?.props?.length ? impl.props : manifest.props;
  if (!props?.length) return null;

  const examples = [];
  for (const prop of props.slice(0, 3)) {
    if (prop.name === 'class' || prop.name === 'className') continue;
    if (prop.default !== undefined) {
      const defaultStr =
        typeof prop.default === 'string'
          ? `"${prop.default}"`
          : String(prop.default);
      examples.push(`${prop.name}=${defaultStr}`);
    }
  }

  return examples.length > 0 ? ` ${examples.join(' ')}` : '';
}

function generateUsageSnippet(manifest, framework) {
  const impl = manifest.frameworks[framework];
  if (impl?.status === 'missing') return null;

  const mainComponent =
    manifest.children?.[0]?.name || manifest.name.replace(/\s/g, '');

  switch (framework) {
    case 'react':
    case 'nextjs': {
      const exportName = manifest.frameworks.react.exports?.[0]?.replace(
        /Props$/,
        ''
      );
      return `<${exportName || mainComponent}${
        getFirstPropExample(manifest, 'react') || ''
      }>Content</${exportName || mainComponent}>`;
    }
    case 'vue': {
      const exportName = manifest.frameworks.vue.exports?.[0];
      return `<${exportName || mainComponent}${
        getFirstPropExample(manifest, 'vue') || ''
      }>Content</${exportName || mainComponent}>`;
    }
    case 'angular': {
      const selector =
        manifest.frameworks.angular.selector || `ui-${manifest.id}`;
      const tag = selector.split(',')[0].trim();
      return `<${tag}${
        getFirstPropExample(manifest, 'angular') || ''
      }>Content</${tag}>`;
    }
    default:
      return null;
  }
}

function generateImportStatement(manifest, framework) {
  const impl = manifest.frameworks[framework];
  if (impl?.status === 'missing') return null;

  const importPath = `@/components/ui/${manifest.id}`;
  const exports = impl.exports || [];

  switch (framework) {
    case 'react':
    case 'nextjs': {
      const main = exports.find((e) => !/Props$|Variants$/.test(e));
      return main ? `import { ${main} } from '${importPath}'` : null;
    }
    case 'vue': {
      const main = exports.find(
        (e) => !/Props$|Variants$/.test(e) && e !== 'toast'
      );
      return main ? `import { ${main} } from '${importPath}/index'` : null;
    }
    case 'angular': {
      const main = exports.find((e) => e.endsWith('Component'));
      return main ? `import { ${main} } from '${importPath}/index'` : null;
    }
    default:
      return null;
  }
}

function generateComponentDoc(manifest) {
  const codeExamples = {};

  for (const framework of [
    'react',
    'vue',
    'angular',
    'react-native',
    'flutter',
  ]) {
    const impl = manifest.frameworks[framework];
    if (impl.status === 'missing') {
      codeExamples[framework] = null;
      continue;
    }

    const snippet = generateUsageSnippet(manifest, framework);
    const importStatement = generateImportStatement(manifest, framework);
    codeExamples[framework] = {
      status: impl.status,
      install: `npx galaxy-design@latest add ${manifest.id}`,
      import: importStatement,
      usage: snippet,
    };
  }

  return {
    id: manifest.id,
    name: manifest.name,
    category: manifest.category,
    status: manifest.status,
    description: manifest.description,
    codeExamples,
    props: manifest.props.map((p) => ({
      name: p.name,
      type: p.type.name || p.type.values?.join(' | ') || p.type.kind,
      default: p.default,
      description: p.description,
      frameworks: p.frameworks,
    })),
  };
}

// Load all manifests
const files = readdirSync(manifestDir)
  .filter((name) => name.endsWith('.json'))
  .sort();
const docs = {};

for (const file of files) {
  const manifest = JSON.parse(readFileSync(join(manifestDir, file), 'utf-8'));
  docs[manifest.id] = generateComponentDoc(manifest);
}

const output = {
  schemaVersion: '1.0.0',
  generated: true,
  source: 'packages/contracts/manifests',
  components: docs,
};

const outPath = join(generatedRoot, 'docs-examples.json');
writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n');
console.log(
  `Generated docs examples for ${
    Object.keys(docs).length
  } components → ${outPath}`
);
