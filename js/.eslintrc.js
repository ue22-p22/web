module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-multiple-empty-lines': 0,
    camelcase: 0,
      'space-before-function-paren': 0,
      'no-tabs': 0,
      'indent': 0
  }
}
