const path = require('path')

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        overrides: {
          constructors: 'off',
        },
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'off',
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-use-before-declare': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': ['off', null],
    '@typescript-eslint/space-within-parens': ['off', 'never'],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': ['off', 'as-needed'],
    camelcase: 'off',
    'comma-dangle': 'off',
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'off',
    'dot-notation': 'error',
    'eol-last': 'off',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'guard-for-in': 'off',
    'id-blacklist': 'off',
    'id-match': 'off',
    'import/no-internal-modules': 'off',
    'linebreak-style': 'off',
    'max-classes-per-file': ['error', 1],
    'max-len': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-shadow': [
      'off',
      {
        hoist: 'all',
      },
    ],
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'off',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'never', prev: 'case', next: 'default' },
      { blankLine: 'never', prev: 'case', next: 'case' },
      { blankLine: 'any', prev: '*', next: 'break' },
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const'], next: ['const'] },
      { blankLine: 'any', prev: ['let'], next: ['let'] },
    ],
    'prefer-arrow/prefer-arrow-functions': 'off',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'react/display-name': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
      },
    ],
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'quote-props': 'off',
    radix: 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // external deps
          ['^react', '^@?\\w'],
          // internal deps
          ['^src', '^assets', '^\\.\\.'],
          // local deps
          ['^\\.'],
          // styles
          ['^.+\\.module\\.s?css$'],
          // side effects
          ['^\\u0000'],
          ['^'],
          ['^.*\\u0000$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'spaced-comment': ['error', 'always'],
    'space-before-function-paren': 'off',
    'use-isnan': 'error',
    'valid-typeof': 'off',
  },
  overrides: [],
  settings: {},
}
