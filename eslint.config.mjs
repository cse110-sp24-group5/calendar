import globals from "globals";
import pluginJs from "@eslint/js";

export default {
  // Set global variables for browser environment
  globals: globals.browser,

  // Extend with recommended configuration from pluginJs
  extends: [pluginJs.configs.recommended],

  // Specify environments
  env: {
    jest: true,
  },

  // Specify ESLint plugins
  plugins: ['jest'],
};
