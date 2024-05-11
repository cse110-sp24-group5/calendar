import pluginJs from "@eslint/js";
import globals from "globals";
import pluginJest from "eslint-plugin-jest";

export default {
  plugins: {
    jest: pluginJest, 
    globals: globals.browser
  },
  languageOptions: {
    globals: {
      jest: "readonly",
      // Add any other global variables here if needed
    },
  },
  pluginJs.configs.recommended,
};
