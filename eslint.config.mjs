import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest",
    },
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/indent': [
        'error',
        2
      ],
      '@stylistic/js/linebreak-style': [
        'error',
        'unix'
      ],
      '@stylistic/js/quotes': [
        'error',
        'single'
      ],
      '@stylistic/js/semi': [
        'error',
        'never'
      ],
      '@stylistic/js/no-trailing-spaces':'error',
      '@stylistic/js/object-curly-spacing':[
        'error',
        'always'
      ],
      '@stylistic/js/arrow-spacing':[
        'error', { 'before': true, 'after': true },
      ],
      'eqeqeq': 'error',
      'no-console': 'off',
    },
  },
  { 
    ignores: ["dist/**", "build/**"],
  },
]

