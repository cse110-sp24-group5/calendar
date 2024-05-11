import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: {
        ...globals.browser, // Assuming globals.browser is an object containing global variables
        jest: "readonly"
      }
    }
  },
  pluginJs.configs.recommended
];
