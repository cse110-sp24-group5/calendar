import globals from "globals";
import pluginJs from "@eslint/js";
const jest = require('eslint-plugin-jest');

export default[ {
  languageOptions: {
    globals: {
      ...globals.browser,
      //jest: "readonly",
      // Add any other global variables here if needed
    },
  },
},
              pluginJs.configs.recommended,];
