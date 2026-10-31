import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import nextVitals from "eslint-config-next/core-web-vitals";
import pluginCypress from "eslint-plugin-cypress";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  globalIgnores([".next/", "out/", "build/", "coverage/", "next-env.d.ts"]),
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  nextVitals,
  {
    // The site is a static export for GitHub Pages, where next/image cannot optimize images
    rules: { "@next/next/no-img-element": "off" }
  },
  { files: ["cypress/**"], extends: [pluginCypress.configs.recommended] },
  eslintConfigPrettier
]);
