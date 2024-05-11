import pluginJs from "@eslint/js";

export default {
  // Extend with recommended configuration from pluginJs
  extends: [pluginJs.configs.recommended],

  // Specify environments
  env: {
    jest: true,
  },

  // Specify ESLint plugins
  plugins: ['jest'],
};
