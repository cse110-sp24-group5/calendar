import globals from "globals";
import pluginJs from "@eslint/js";

export default {
  overrides: [
    {
      files: ["*.js"], // Adjust the pattern to match your project's JavaScript files
      extends: [
        "plugin:jest/recommended", // Use recommended Jest rules
        "eslint:recommended", // Use ESLint recommended rules
      ],
      plugins: ["jest"], // Add Jest plugin
      env: {
        jest: true, // Set Jest environment
      },
    },
  ],
};
