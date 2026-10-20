import { defineConfig, globalIgnores } from 'eslint/config';
import javascript from '@eslint/js';
import typescript from 'typescript-eslint';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import accessibility from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'coverage/**',
    'playwright-report/**',
    'test-results/**',
    'next-env.d.ts',
  ]),
  javascript.configs.recommended,
  ...typescript.configs.recommended,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ['**/*.tsx'],
    plugins: { react, 'react-hooks': hooks, 'jsx-a11y': accessibility },
    settings: {
      react: { version: 'detect' },
      'jsx-a11y': { components: { Link: 'a' } },
    },
    rules: {
      ...react.configs.flat['jsx-runtime'].rules,
      ...hooks.configs.flat.recommended.rules,
      ...accessibility.flatConfigs.recommended.rules,
      'react/jsx-key': 'error',
      'react/no-unknown-property': 'error',
    },
  },
]);
