#!/usr/bin/env node
/**
 * Bundle registry data + manifests + component sources into dist/data/
 * so the published MCP package works standalone (no repo checkout needed).
 */
import { cpSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const pkgRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = resolve(pkgRoot, '..', '..');
const distData = join(pkgRoot, 'dist', 'data');

// 1. Fresh data dir
rmSync(distData, { recursive: true, force: true });
mkdirSync(distData, { recursive: true });

// 2. Copy generated registries + manifests
cpSync(join(repoRoot, 'packages/contracts/generated'), join(distData, 'generated'), { recursive: true });
cpSync(join(repoRoot, 'packages/contracts/manifests'), join(distData, 'manifests'), { recursive: true });

// 3. Copy component sources from latest versioned artifact (sources/<fw>/<id>/<file>)
const latest = JSON.parse(readFileSync(join(repoRoot, 'packages/contracts/dist/registry/latest-manifest.json'), 'utf-8'));
const artifactDir = join(repoRoot, 'packages/contracts/dist/registry', latest.version);
cpSync(join(artifactDir, 'sources'), join(distData, 'sources'), { recursive: true });

// 4. Stamp version info
writeFileSync(join(distData, 'version.json'), JSON.stringify({
  version: latest.version,
  generatedAt: latest.generatedAt,
  sourcesCount: latest.sourcesCount,
}, null, 2) + '\n');

// 5. Copy entry point into dist/
cpSync(join(pkgRoot, 'src', 'index.js'), join(pkgRoot, 'dist', 'index.js'));

console.log(`Bundled data: generated + ${Object.keys(latest.files).length} registries + ${latest.sourcesCount} sources`);
