import css from "@eslint/css"
import js from "@eslint/js"
import pluginPerfectionist from "eslint-plugin-perfectionist"
import pluginReact from "eslint-plugin-react"
import pluginUnicorn from "eslint-plugin-unicorn"
import pluginUnusedImports from "eslint-plugin-unused-imports"
import { defineConfig } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  // Base configurations for JS/TS files only
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    ...pluginPerfectionist.configs["recommended-natural"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    ...pluginUnicorn.configs.all,
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  })),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  // CSS configuration
  {
    extends: ["css/recommended"],
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
    rules: {
      "css/use-baseline": "off",
    },
  },
  // JavaScript configuration
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
  },
  // Custom rules for JS/TS files only
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowInterfaces: "with-single-extends",
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          newlinesBetween: "never",
          sortSideEffects: true,
        },
      ],
      "react/react-in-jsx-scope": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/import-style": "off",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/no-unused-properties": "warn",
      "unicorn/prevent-abbreviations": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
])
