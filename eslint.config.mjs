//import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: {
        jest = "readonly"
      }
    }
  },
  pluginJs.configs.recommended
];
