#!/usr/bin/env node
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { buildArtifacts } from './lib/artifacts.mjs';

const contractsRoot = resolve(new URL('..', import.meta.url).pathname);
const generatedRoot = resolve(contractsRoot, 'generated');

const artifacts = buildArtifacts();

mkdirSync(resolve(contractsRoot, 'generated'), { recursive: true });

for (const [framework, registry] of Object.entries(
  artifacts.frameworkRegistries
)) {
  const file = resolve(
    contractsRoot,
    'generated',
    `registry-${framework}.json`
  );
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, `${JSON.stringify(registry, null, 2)}\n`);
}

writeFileSync(
  resolve(contractsRoot, 'generated', 'registry-summary.json'),
  `${JSON.stringify(artifacts.summary, null, 2)}\n`
);
writeFileSync(
  resolve(contractsRoot, 'generated', 'coverage.json'),
  `${JSON.stringify(artifacts.coverage, null, 2)}\n`
);

console.log('Generated registry artifacts in packages/contracts/generated.');
