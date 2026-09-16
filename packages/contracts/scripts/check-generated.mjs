#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildArtifacts } from './lib/artifacts.mjs';

const contractsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const generatedRoot = resolve(contractsRoot, 'generated');
const artifacts = buildArtifacts();

const expected = {
  'registry-summary.json': artifacts.summary,
  'coverage.json': artifacts.coverage,
  ...Object.fromEntries(
    Object.entries(artifacts.frameworkRegistries).map(
      ([framework, registry]) => [`registry-${framework}.json`, registry]
    )
  ),
};

let failed = false;

for (const [name, value] of Object.entries(expected)) {
  const path = join(generatedRoot, name);
  const actual = readFileSync(path, 'utf-8');
  const expectedText = `${JSON.stringify(expected[name], null, 2)}\n`;
  if (actual !== expectedText) {
    failed = true;
    console.error(
      `STALE ${name}: regenerate with \`npm run manifests:generate\`.`
    );
  } else {
    console.log(`FRESH ${name}`);
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log('Generated artifacts are fresh.');
}
