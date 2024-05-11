import pluginJs from "@eslint/js";
import globals from "globals";
import pluginJest from "eslint-plugin-jest";

export default {
  plugins: {
    jest: pluginJest,
  },
  languageOptions: {
    globals: {
      ...globals.browser, // Spread the globals from "globals.browser"
      jest: "readonly",
      // Add any other global variables here if needed
    },
  },
  extends: [pluginJs.configs.recommended], // Use extends instead of pluginJs.configs.recommended
};
