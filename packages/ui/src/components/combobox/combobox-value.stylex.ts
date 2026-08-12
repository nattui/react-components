import * as stylex from "@stylexjs/stylex"

export const comboboxValueStyles = stylex.create({
  base: {
    color: {
      default: "var(--color-text-primary)",
      [stylex.when.ancestor("[data-placeholder]")]: "var(--color-gray-9)",
    },
    fontSize: 14,
    fontWeight: 450,
    overflowX: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
})
