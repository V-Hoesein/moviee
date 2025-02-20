import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import importNewlineAfter from 'eslint-plugin-import'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', 'src/components/ui/**/*.{js,jsx,ts,tsx}'],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig,
      ...pluginQuery.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import-newline-after': importNewlineAfter,
      prettier,
      import: importNewlineAfter,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': [
        'warn',
        {
          usePrettierrc: true,
        },
      ],
      'import/newline-after-import': ['error', { count: 1 }],
    },
  }
)
