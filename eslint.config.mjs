import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: { ...globals.browser, ...globals.jest, page: "readonly" }}},
<<<<<<< HEAD
  pluginJs.configs.recommended,	  pluginJs.configs.recommended,
=======
  pluginJs.configs.recommended,
>>>>>>> main
];
