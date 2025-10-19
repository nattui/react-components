import pluginJs from "@eslint/js"
import pluginPerfectionist from "eslint-plugin-perfectionist"
import pluginReact from "eslint-plugin-react"
import pluginUnicorn from "eslint-plugin-unicorn"
import pluginUnusedImports from "eslint-plugin-unused-imports"
import { defineConfig } from "eslint/config"
import pluginTsEslint from "typescript-eslint"

export default defineConfig([
  {
    ignores: ["**/.next/**", "**/dist/**", "**/storybook-static/**"],
  },
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js: pluginJs,
    },
  },
  {
    extends: [
      pluginPerfectionist.configs["recommended-natural"],
      pluginTsEslint.configs["recommended"],
      pluginUnicorn.configs["all"],
    ],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      react: pluginReact,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          newlinesBetween: "never",
          sortSideEffects: true,
        },
      ],
      "unicorn/consistent-function-scoping": "off",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/no-unused-properties": "warn",
      "unicorn/prevent-abbreviations": "off",
      "unused-imports/no-unused-imports": "error",
    },
  },
])
