import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js", "!**/eslint.config.js"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "warn",
      semi: "0",
      "prefer-const": "error"
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        MY_CUSTOM_GLOBAL: "readonly"
      }
    }
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        it: "readonly",
        describe: "readonly"
      }
    }
  }
];