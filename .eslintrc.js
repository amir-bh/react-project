const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$'
    ],
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    },
    'import/extensions': ['.js']
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-console': 0,
    'new-cap': 0,
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['warn', 'only-multiline'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    // Exception for StoryBook and Jest
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './scripts/**',
          '**/__tests__/*.js',
          '**/*.spec.js',
          '**/setupTests.js',
          './storybook/**'
        ]
      }
    ],
    // Import
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          ['parent', 'sibling', 'index']
        ],
        'newlines-between': 'always'
      }
    ],
    // Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // a11y
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input']
      }
    ],
    'jsx-a11y/label-has-for': 1,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    // propTypes
    'react/prop-types': 1,
    'react/jsx-props-no-spreading': 0
  }
};
