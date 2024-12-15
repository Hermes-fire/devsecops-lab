import globals from "globals";
import pluginJs from "@eslint/js";
import pluginSecurity from "eslint-plugin-security";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  pluginSecurity.configs.recommended,
];
