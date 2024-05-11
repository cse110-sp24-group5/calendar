import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  { languageOptions: { globals: globals.browser } },
{
  "plugins": ["jest"]
},
  {
  "env": {
    "jest/globals": true
  }
},
];
