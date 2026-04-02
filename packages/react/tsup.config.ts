import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/components/*/index.ts'],
  format: ['esm'],
  dts: false,
  clean: true,
  treeshake: true,
  splitting: false,
  outDir: 'dist',
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.external = [
      'react',
      'react-dom',
      '@radix-ui/react-*',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
      'lucide-react',
      'echarts',
      'echarts-for-react',
      'react-day-picker',
      'date-fns',
      'react-hook-form',
      'react-resizable-panels',
      'cmdk',
      'sonner',
    ];
  },
});
