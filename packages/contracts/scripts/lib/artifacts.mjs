import { contractsRoot, FRAMEWORK_DIRS } from './manifests.mjs';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const FRAMEWORKS = ['react', 'vue', 'angular', 'react-native', 'flutter'];

function loadManifests() {
  const manifestDir = resolve(contractsRoot, 'manifests');
  const files = readdirSync(manifestDir)
    .filter((name) => name.endsWith('.json'))
    .sort();
  return files.map((name) => ({
    file: name,
    manifest: JSON.parse(readFileSync(join(manifestDir, name), 'utf-8')),
  }));
}

import { readdirSync } from 'node:fs';
import { join } from 'node:path';

export function buildArtifacts() {
  const manifests = loadManifests();
  const frameworks = Object.fromEntries(FRAMEWORKS.map((name) => [name, {}]));
  const summaryComponents = {};
  const coverage = {
    schemaVersion: '1.0.0',
    pilot: true,
    components: {},
    frameworks: {},
  };

  for (const framework of FRAMEWORKS) {
    coverage.frameworks[framework] = { available: [], missing: [] };
  }

  for (const { manifest } of manifests) {
    summaryComponents[manifest.id] = {
      name: manifest.name,
      type: manifest.category,
      description: manifest.description,
      category: manifest.category,
      status: manifest.status,
      frameworks: FRAMEWORKS.filter(
        (framework) => manifest.frameworks[framework].status !== 'missing'
      ),
      props: manifest.props,
      children: manifest.children || [],
    };

    for (const framework of FRAMEWORKS) {
      const impl = manifest.frameworks[framework];
      if (impl.status === 'missing') {
        coverage.frameworks[framework].missing.push(manifest.id);
        continue;
      }
      coverage.frameworks[framework].available.push(manifest.id);
      frameworks[framework][manifest.id] = {
        id: manifest.id,
        name: manifest.name,
        type: manifest.category,
        status: impl.status,
        description: manifest.description,
        files: impl.files,
        entry: impl.entry,
        exports: impl.exports || [],
        dependencies: impl.dependencies || [],
        devDependencies: impl.devDependencies || [],
        peerDependencies: impl.peerDependencies || [],
        registryDependencies: impl.registryDependencies || [],
        category: manifest.category,
        props: impl.props || [],
        ...(impl.selector ? { selector: impl.selector } : {}),
        ...(impl.providers ? { providers: impl.providers } : {}),
        manifestStatus: manifest.status,
      };
    }

    coverage.components[manifest.id] = {
      status: manifest.status,
      available: summaryComponents[manifest.id].frameworks,
    };
  }

  return {
    frameworkRegistries: Object.fromEntries(
      FRAMEWORKS.map((framework) => [
        framework,
        {
          schemaVersion: '1.0.0',
          name: framework,
          generated: true,
          pilot: true,
          source: 'packages/contracts/manifests',
          components: frameworks[framework],
        },
      ])
    ),
    summary: {
      schemaVersion: '1.0.0',
      generated: true,
      pilot: true,
      source: 'packages/contracts/manifests',
      components: summaryComponents,
    },
    coverage,
  };
}

export { FRAMEWORKS };
