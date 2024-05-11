import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default {
  plugins: {
    jest: pluginJest,
  },
  rules: {
    // Define ESLint rules here if needed
    // Example:
    // "no-console": "off"
  },
  env: {
    jest: true, // Set Jest environment
  },
};
