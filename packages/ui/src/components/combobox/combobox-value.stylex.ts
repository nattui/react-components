import { create, when } from "@stylexjs/stylex"

export const comboboxValueStyles = create({
  base: {
    color: {
      default: "var(--color-text-primary)",
      [when.ancestor("[data-placeholder]")]: "var(--color-neutral-9)",
    },
    fontSize: 14,
    fontWeight: 450,
    overflowX: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
})
