import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/components/*/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  splitting: false,
  outDir: 'dist/components',
  esbuildOptions(options) {
    options.jsx = 'automatic'
  }
})
