module.exports = {
  root: true, 
  parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2015
  },
  extends: 'eslint:recommended',
  extends: 'eslint:all',
  env: {
      browser: true,
  },
  rules: {
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-console": "error",
      "arrow-parens": 0,
      "linebreak-style": ["off", "windows"]
  }
}