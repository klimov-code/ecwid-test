import typescriptParser from '@typescript-eslint/parser';
import typescript from '@typescript-eslint/eslint-plugin';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintImport from 'eslint-plugin-import';
import vueParser from 'vue-eslint-parser';

export default [
  {
    ignores: ['node_modules', 'dist', '.git'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      import: eslintImport,
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'linebreak-style': 'off',
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/export': 'error',
      'import/first': 'error',
      'import/named': 'error',
      'import/no-duplicates': 'error',
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],
      'import/no-named-default': 'error',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',
    },
  },
  {
    files: ['src/**/*.tsx', 'src/**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      prettier,
      vue,
      perfectionist,
    },
    rules: {
      ...vue.configs['flat/recommended'].rules,
      ...prettier.configs.recommended.rules,
      ...perfectionist.configs['recommended-alphabetical'].rules,
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          'newlines-between': 'always',
          'internal-pattern': ['@app/**', '#types/**'],
          groups: [
            ['side-effect'],
            ['builtin-type'],
            ['type'],
            ['internal-type', 'parent-type', 'sibling-type'],
            ['index-type'],
            ['builtin'],
            ['external'],
            ['internal', 'parent', 'sibling'],
            ['index'],
            ['style'],
            ['object'],
            ['unknown'],
          ],
        },
      ],
    },
  },
];
