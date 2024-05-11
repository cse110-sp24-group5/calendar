import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["*.js"], // Adjust the pattern to match your project's JavaScript files
    rules: {
      // Define ESLint rules directly here if needed
      // Example:
      // "no-console": "off"
    },
    plugins: ["jest"], // Add Jest plugin
    env: {
      jest: true, // Set Jest environment
    },
  },
];
