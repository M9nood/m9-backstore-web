module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'linebreak-style': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
    camelcase: 'off',
    // for typescript
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    // for more pretty
    'import/newline-after-import': 'off' // TODO: will be error level in the future
  }
}
