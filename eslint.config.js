import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  next.configs.recommended,
  {
    plugins: {
      '@next/next': next,  // ✅ Correct object format
      prettier: prettier,  // ✅ Correct object format
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];