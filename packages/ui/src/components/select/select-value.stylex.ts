import { create } from "@stylexjs/stylex"

export const selectValueStyles = create({
  base: {
    color: {
      ":is([data-placeholder])": "var(--color-gray-9)",
      default: "var(--color-text-primary)",
    },
    fontSize: 14,
    fontWeight: 450,
    overflowX: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
})
