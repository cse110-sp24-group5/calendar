import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  { plugins: { jest: pluginJest } },
  { languageOptions: { globals: { browser: true, jest: true } } },
  pluginJs.configs.recommended
];
