import assert from 'node:assert/strict';

await import('@angular/compiler');
const rootModule = await import('../dist/fesm2022/galaxy-ui-angular.mjs');

assert.equal(typeof rootModule.ButtonComponent, 'function');
assert.equal(typeof rootModule.buttonVariants, 'function');

console.log('angular smoke import passed');
