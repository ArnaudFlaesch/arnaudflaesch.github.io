import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginCypress from 'eslint-plugin-cypress/flat';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginCypress.configs.recommended,
  {
    ignores: [
      'cypress/**',
      'cypress.config.ts',
      'cypress-test.config.ts',
      'nuxt.config.ts',
      'node_modules',
      'dist',
      '.nuxt',
      '.output',
      'build',
      'coverage',
      'package-lock.json'
    ]
  }
];
