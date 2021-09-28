module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
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
    '@typescript-eslint/no-use-before-define': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    // for more pretty
    'import/newline-after-import': ['warn', { count: 1 }], // TODO: will be error level in the future
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
