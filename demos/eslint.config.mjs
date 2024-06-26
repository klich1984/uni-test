// import globals, { jest } from 'globals'
const globals = require('globals')
import pluginJs from '@eslint/js'

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser, jest: globals.jest } },
  pluginJs.configs.recommended,
]
// module.exports = {
//   env: {
//     browser: true,
//     commonjs: true,
//     es2021: true,
//     jest: true
//   },
//   extends: [
//     'airbnb-base',
//   ],
//   parseOptions: {
//     ecmaVersion: 'latest',
//   },
//   rules: {},
// }