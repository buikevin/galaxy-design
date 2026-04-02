import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const buttonModule = await import('../dist/components/button/index.js');
const rootTypes = readFileSync(
  new URL('../dist/index.d.ts', import.meta.url),
  'utf-8'
);

assert.equal(['function', 'object'].includes(typeof buttonModule.Button), true);
assert.equal(typeof buttonModule.buttonVariants, 'function');
assert.match(rootTypes, /export \* from '\.\/components\/button';/);

console.log('react smoke import passed');
