import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
export default [{
  plugins: {
    jest: pluginJest,
  },
  languageOptions: {
    globals: {
      jest: "readonly",
      // Add any other global variables here if needed
    }
  }
}];
