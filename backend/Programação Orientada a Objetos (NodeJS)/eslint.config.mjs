import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    "env": {
      "es2021": true,
      "node": true
    },
    "extends": "standard-with-typescript",
    "overrides": [

    ],
    "parseOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "rules": {
      
    }
  }
];