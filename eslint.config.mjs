import globals from "globals";
import pluginJs from "@eslint/js";

export default {
  overrides: [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended
  ],
  env: {
    jest: true,
  },
  plugins: ['jest'],
};
