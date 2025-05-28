import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

export default [

  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-indent': [2, 2],
      'array-bracket-spacing': [2, 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'comma-dangle': [2, 'never'],
      'eol-last': 2,
      'jsx-quotes': ['error', 'prefer-single'],
      'quotes': [2, 'single', { avoidEscape: true }],
      'object-curly-spacing': ['error', 'always'],
      'indent': [2, 2, { SwitchCase: 1 }],
      'key-spacing': ['error', { align: 'colon' }],
      'semi': [2, 'never'],
      'no-trailing-spaces': 2
    }
  }
]
