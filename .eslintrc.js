/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 'eslint:recommended' >> Production시
  extends: ['plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'html'],
  rules: {
    'no-unused-expressions': 0,
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 0,
  },
}
