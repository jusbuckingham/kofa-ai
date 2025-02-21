import js from '@eslint/js';
import next from '@next/eslint-plugin-next';

/** @type {import('eslint').FlatConfig[]} */
export default [
  js.configs.recommended,
  next.configs.recommended,
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
];