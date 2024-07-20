const { SemicolonPreference } = require("typescript");

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    SemicolonPreference: false,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
