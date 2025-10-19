/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  cssDeclarationSorterOrder: "alphabetical",
  jsonRecursiveSort: true,
  plugins: [
    "prettier-plugin-css-order",
    "prettier-plugin-packagejson",
    "prettier-plugin-sort-json",
    "prettier-plugin-tailwindcss",
  ],
  semi: false,
}

export default config
