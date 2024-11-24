import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginCypress from "eslint-plugin-cypress/flat";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  pluginCypress.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser"
      }
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/attribute-hyphenation": "off"
    }
  },
  {
    ignores: [
      "cypress/**",
      "cypress.config.ts",
      "cypress-test.config.ts",
      "nuxt.config.ts",
      "dist",
      ".nuxt/",
      ".output/",
      ".unlighthouse/",
      "build",
      "coverage"
    ]
  }
];
