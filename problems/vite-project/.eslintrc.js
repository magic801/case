module.exports = {
  root: true,
  env: {
    node: true
  },
  settings: {
    settings: {
      'import/resolver': {
        node: {
          paths: ['src']
        }
      }
    }
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': [2, 'never'],
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'object-curly-newline': 'off',
    'lines-between-class-members': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-empty-function': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'import/no-cycle': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'no-unused-vars': 'off',
    'no-case-declarations': 'off',
    'vue/no-v-html': 'off',
    'no-extend-native': 'off',
    'no-async-promise-executor': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
