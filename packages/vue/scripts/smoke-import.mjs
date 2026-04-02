import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const rootBundle = readFileSync(
  new URL('../dist/index.js', import.meta.url),
  'utf-8'
);
const rootTypes = readFileSync(
  new URL('../dist/index.d.ts', import.meta.url),
  'utf-8'
);

assert.match(rootTypes, /export \* from '\.\/components\/button';/);
assert.match(rootBundle, /buttonVariants/);
assert.match(rootBundle, /Button/);

console.log('vue smoke import passed');
