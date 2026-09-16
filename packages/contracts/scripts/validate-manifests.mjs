#!/usr/bin/env node
import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectIssues } from './lib/manifests.mjs';

const contractsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifestDir = resolve(contractsRoot, 'manifests');
const files = readdirSync(manifestDir)
  .filter((name) => name.endsWith('.json'))
  .sort();

let failed = false;

for (const name of files) {
  const path = join(manifestDir, name);
  let manifest;
  try {
    manifest = JSON.parse(readFileSync(path, 'utf-8'));
  } catch (error) {
    console.error(`${name}: invalid JSON (${error.message})`);
    failed = true;
    continue;
  }

  const issues = collectIssues(manifest);
  if (issues.length) {
    failed = true;
    console.error(`${name}: ${issues.length} issue(s)`);
    for (const issue of issues) {
      console.error(`- ${issue}`);
    }
  } else {
    console.log(`PASS ${name}`);
  }
}

if (failed) {
  process.exitCode = 1;
}
