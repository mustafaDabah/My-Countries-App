/* eslint-disable */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  rules: {
    // simple ruleset, not too strict
    'react/react-in-jsx-scope': 'off', // vite handles React import
    'react/prop-types': 'off',         // we use TypeScript types
    'import/order': ['warn', { groups: [['builtin', 'external', 'internal']], alphabetize: { order: 'asc' } }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
};
