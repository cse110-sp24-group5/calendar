import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";


export default [
  {plugins: { jest: pluginJest }},
  {languageOptions: { jest: "readonly", globals: globals.browser }},
  pluginJs.configs.recommended
];
