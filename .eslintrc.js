module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/script-setup-no-uses-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        quoteProps: 'as-needed',
        jsxSingleQuote: false,
        trailingComma: 'es5',
        arrowParens: 'always',
        endOfLine: 'lf',
        bracketSpacing: true,
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'preserve',
        vueIndentScriptAndStyle: false,
      },
    ],
  },
}
