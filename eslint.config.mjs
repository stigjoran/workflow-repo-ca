import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['tailwind.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },

  {
    files: ['playwright.config.js', 'e2e/**/*.spec.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
  },
]);
