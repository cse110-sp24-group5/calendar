import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: {
        jest: "readonly",
        // Add any other global variables here if needed
      },
    },
    rules: {
      // Define ESLint rules here if needed
      // Example:
      // "no-console": "off"
    },
    env: {
      jest: true, // Set Jest environment
    },
  },
];
