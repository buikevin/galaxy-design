#!/usr/bin/env node
/**
 * Build the versioned, immutable registry release artifact:
 *
 *   dist/registry/<version>/manifest.json     — version + sha256 per file
 *   dist/registry/<version>/registry-<fw>.json
 *   dist/registry/<version>/registry-summary.json
 *   dist/registry/<version>/coverage.json
 *
 * Every artifact file gets a sha256 checksum recorded in manifest.json so the
 * CDN distribution (P1.4) can be verified independently of how it is served.
 * The manifest itself carries a `digest` (sha256 of the sorted checksum list)
 * that a CLI release can bundle as its trust anchor.
 */

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const contractsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = resolve(contractsRoot, '..', '..');

function sha256(content) {
  return createHash('sha256').update(content, 'utf-8').digest('hex');
}

function gitCommit() {
  try {
    return execSync('git rev-parse HEAD', {
      cwd: repoRoot,
      encoding: 'utf-8',
    }).trim();
  } catch {
    return 'unknown';
  }
}

const contractsPkg = JSON.parse(
  readFileSync(join(contractsRoot, 'package.json'), 'utf-8')
);

const version = `${contractsPkg.version}+${gitCommit().slice(0, 12)}`;
const versionDir = join(contractsRoot, 'dist', 'registry', version);
mkdirSync(versionDir, { recursive: true });

const generatedRoot = resolve(contractsRoot, 'generated');
const artifactFiles = [
  'registry-react.json',
  'registry-vue.json',
  'registry-angular.json',
  'registry-react-native.json',
  'registry-flutter.json',
  'registry-summary.json',
  'coverage.json',
];

const files = {};

for (const fileName of artifactFiles) {
  const sourcePath = join(generatedRoot, fileName);
  if (!existsSync(sourcePath)) {
    throw new Error(
      `Generated artifact missing: ${fileName}. Run npm run manifests:generate first.`
    );
  }

  const content = readFileSync(sourcePath, 'utf-8');
  const checksum = sha256(content);
  files[fileName] = { checksum, size: Buffer.byteLength(content, 'utf-8') };
  writeFileSync(join(versionDir, fileName), content);
}

const checksumList = Object.entries(files)
  .map(([fileName, meta]) => `${fileName} ${meta.checksum}`)
  .sort()
  .join('\n');
const digest = sha256(checksumList);

const manifest = {
  schemaVersion: '1.0.0',
  version,
  generatedAt: new Date().toISOString(),
  source: 'packages/contracts/manifests',
  gitCommit: gitCommit(),
  files,
  digest,
};

writeFileSync(
  join(versionDir, 'manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`
);

writeFileSync(
  join(contractsRoot, 'dist', 'registry', 'latest-manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`
);

console.log(`Registry artifact built: dist/registry/${version}`);
console.log(
  `Files: ${Object.keys(files).length} (digest ${digest.slice(0, 16)}...)`
);
