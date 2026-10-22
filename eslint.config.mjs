import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginCypress from "eslint-plugin-cypress";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { ignores: ["cypress*.config.ts", ".next/", "out/", "build/", "coverage/"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  { ...pluginCypress.configs.recommended, files: ["cypress/**"] },
  eslintConfigPrettier
];
