import pluginJs from "@eslint/js";

export default {
  // Inline the configuration you're extending
  ...pluginJs.configs.recommended,

  // Specify environments
  env: {
    jest: true,
  },

  // Specify ESLint plugins
  plugins: ['jest'],
};
