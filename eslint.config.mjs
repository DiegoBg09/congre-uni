import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'
import stylistic from '@stylistic/eslint-plugin'
import eslintPluginImport from 'eslint-plugin-import'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      '@stylistic': stylistic,
      'import'    : eslintPluginImport
    },
    rules: {
      '@stylistic/jsx-indent' : [ 2, 2 ],
      '@stylistic/semi'       : [ 'error', 'never' ],
      // '@stylistic/no-multi-spaces': [
      //   'error', {
      //     exceptions: {
      //       Property        : true,
      //       TSTypeAnnotation: true,
      //     }
      //   }
      // ],
      '@stylistic/key-spacing': [
        'error',
        {
          'align': 'colon',
        }
      ],
      '@stylistic/object-curly-spacing'  : [ 'error', 'always' ],
      // '@stylistic/semi-spacing' : 'error',
      // '@stylistic/no-extra-semi': 'error',
      '@stylistic/member-delimiter-style': 'error',
      '@stylistic/keyword-spacing'       : [
        'error',
        {
          overrides: {
            if: { after: false }
          }
        }
      ],
      '@stylistic/space-infix-ops': 2,
      // '@stylistic/block-spacing'         : 'error',
      'array-bracket-spacing'     : [ 2, 'always' ],
      'arrow-spacing'             : 'error',
      'jsx-quotes'                : [ 'error', 'prefer-single' ],
      'quotes'                    : [
        2,
        'single',
        {
          'avoidEscape': true
        }
      ],
      'no-trailing-spaces': 2,
      'indent'            : [
        2,
        2,
        {
          'SwitchCase': 1
        }
      ],
      'eol-last'           : 2,
      // 'prefer-destructuring': 'error',
      // 'comma-dangle'                   : [ 2, 'never' ],
      'space-before-blocks': [ 2, 'always' ],
      'import/order'       : [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
            'unknown'
          ],
          'pathGroups': [
            {
              'pattern' : 'react',
              'group'   : 'external',
              'position': 'before'
            },
            {
              'pattern' : 'react/**',
              'group'   : 'external',
              'position': 'before'
            },
            {
              'pattern' : '@/**',
              'group'   : 'internal',
              'position': 'after'
            }
          ],
          'pathGroupsExcludedImportTypes': [ 'react' ],
          'newlines-between'             : 'always',
          'alphabetize'                  : {
            'order'          : 'asc',
            'caseInsensitive': true
          }
        }
      ]
    }
  }
]

export default eslintConfig
