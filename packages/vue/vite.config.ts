import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      external: [
        'vue',
        'radix-vue',
        '@vueuse/core',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'lucide-vue-next',
        'vue-sonner',
        'vue-echarts',
        'echarts',
      ],
      output: {
        exports: 'named',
      },
    },
  },
})