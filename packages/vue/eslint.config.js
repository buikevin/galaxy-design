import { defineConfig } from 'eslint/config'
import vueParser from 'vue-eslint-parser'
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import vuePlugin from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  {
    files: ['**/*.{vue,ts,tsx,mts,cts}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      vue: vuePlugin,
    },
    rules: {
      'no-unused-vars': 'off',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/no-unused-vars': 'error',
      'vue/no-unused-components': 'warn',
    },
  },
  {
    extends: [prettier],
  },
  {
    ignores: ['dist', 'node_modules', '*.config.js', 'vitest.config.ts', 'eslint.config.js'],
  },
])
