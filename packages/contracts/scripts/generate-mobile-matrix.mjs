#!/usr/bin/env node
/**
 * Generate a mobile compatibility matrix showing which components are
 * available on RN/Flutter, which are web-only, and which need a port.
 * Categories based on practical mobile suitability (not just file existence).
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const contractsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const generatedRoot = join(contractsRoot, 'generated');
const cov = JSON.parse(
  readFileSync(join(generatedRoot, 'coverage.json'), 'utf-8')
);
const summary = JSON.parse(
  readFileSync(join(generatedRoot, 'registry-summary.json'), 'utf-8')
);

const WEB_ONLY = new Set([
  // Genuinely not mobile-suitable (interaction model or platform)
  'breadcrumb',
  'command',
  'combobox',
  'dashboard-block',
  'data-table',
  'kbd',
  'resizable',
  'scroll-area',
  'toolbar',
  'hover-card',
]);

const NEEDS_PORT = [
  'tags-input',
];

const FRAMEWORKS = ['react', 'vue', 'angular', 'react-native', 'flutter'];
const MOBILE = ['react-native', 'flutter'];

const matrix = {
  schemaVersion: '1.0.0',
  generated: true,
  pilot: true,
  categories: {
    available: 'Component exists and is installable on this framework',
    'web-only': 'Interaction model not suitable for touch devices',
    'needs-port': 'Useful on mobile, no implementation yet',
  },
  frameworks: {},
};

for (const framework of FRAMEWORKS) {
  const available = cov.frameworks[framework].available;
  const missing = cov.frameworks[framework].missing;
  matrix.frameworks[framework] = {
    available: available.length,
    components: {},
  };

  // Build a set of all component IDs across all frameworks
  const allIds = new Set();
  for (const fw of FRAMEWORKS) {
    for (const id of cov.frameworks[fw].available) {
      allIds.add(id);
    }
    for (const id of cov.frameworks[fw].missing) {
      allIds.add(id);
    }
  }

  for (const id of [...allIds].sort()) {
    const isAvailable = available.includes(id);
    const isMissing = missing.includes(id);

    if (isAvailable) {
      matrix.frameworks[framework].components[id] = 'available';
    } else if (
      isMissing &&
      (framework === 'react-native' || framework === 'flutter')
    ) {
      // Categorize why it's missing on mobile
      const reactHasIt = cov.frameworks.react.available.includes(id);
      if (reactHasIt && WEB_ONLY.has(id)) {
        matrix.frameworks[framework].components[id] = 'web-only';
      } else if (reactHasIt && NEEDS_PORT.includes(id)) {
        matrix.frameworks[framework].components[id] = 'needs-port';
      } else if (reactHasIt) {
        matrix.frameworks[framework].components[id] = 'needs-port';
      } else {
        matrix.frameworks[framework].components[id] = 'not-in-any-framework';
      }
    } else {
      matrix.frameworks[framework].components[id] = 'available';
    }
  }
}

// Summary
for (const framework of FRAMEWORKS) {
  const components = matrix.frameworks[framework].components;
  const counts = {};
  for (const status of Object.values(components)) {
    counts[status] = (counts[status] || 0) + 1;
  }
  matrix.frameworks[framework].summary = counts;
}

// Write to generated/
const outPath = join(generatedRoot, 'mobile-matrix.json');
writeFileSync(outPath, JSON.stringify(matrix, null, 2) + '\n');
console.log('Mobile matrix written to', outPath);

// Print summary
for (const framework of [
  'react',
  'vue',
  'angular',
  'react-native',
  'flutter',
]) {
  const s = matrix.frameworks[framework].summary;
  const total =
    matrix.frameworks[framework].available +
    (s['needs-port'] || 0) +
    (s['web-only'] || 0) +
    (s['not-in-any-framework'] || 0);
  console.log(
    `${framework}: ${
      matrix.frameworks[framework].available
    }/${total} available, ${s['needs-port'] || 0} needs port, ${
      s['web-only'] || 0
    } web-only`
  );
}
