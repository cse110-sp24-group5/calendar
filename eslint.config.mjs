import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default {
  ...pluginJs.configs.recommended,
  languageOptions: {
    globals: {
      ...globals.browser,
      jest: "readonly",
      // Add any other global variables here if needed
    },
  },
  plugins: {
    ...pluginJs.plugins,
    jest: pluginJest,
  },
  env: {
    ...pluginJs.env,
    jest: true, // Set Jest environment
  },
};
