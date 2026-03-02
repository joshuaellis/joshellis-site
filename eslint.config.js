// @ts-check
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')
const eslintPluginReact = require('eslint-plugin-react')
const eslintPluginReactHooks = require('eslint-plugin-react-hooks')
const prettierConfig = require('eslint-config-prettier')

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    ignores: ['**/node_modules/**', '.next/**', 'src/features/HapticCanvas/**'],
  },
  {
    ...eslintPluginReact.configs.flat.recommended,
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: {
      react: {
        // 'detect' uses context.getFilename() which was removed in ESLint v10
        version: '19',
      },
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...eslintPluginReactHooks.configs.flat.recommended,
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'prefer-const': 'error',
      'no-duplicate-imports': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'react/prop-types': 'off',
      'react/jsx-key': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules,
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-unused-vars': 'off',
      'prefer-const': 'error',
      'no-duplicate-imports': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'react/prop-types': 'off',
      'react/jsx-key': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
    },
  },
  prettierConfig,
]
