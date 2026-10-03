import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginCypress from "eslint-plugin-cypress/flat";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginCypress.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      "no-undef": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    ignores: [
      "cypress/**",
      "cypress.config.ts",
      "cypress-test.config.ts",
      "next.config.mjs",
      "dist",
      ".next/",
      ".nuxt/",
      ".output/",
      "out/",
      "build",
      "coverage"
    ]
  }
];
