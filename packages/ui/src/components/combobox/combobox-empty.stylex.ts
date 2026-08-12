import * as stylex from "@stylexjs/stylex"

export const comboboxEmptyStyles = stylex.create({
  base: {
    color: {
      ":not(:empty)": "var(--color-text-secondary)",
      default: "transparent",
    },
    fontSize: {
      ":not(:empty)": 14,
      default: 0,
    },
    fontWeight: {
      ":not(:empty)": 450,
      default: 400,
    },
    padding: {
      ":not(:empty)": "8px 12px",
      default: 0,
    },
    textAlign: "center",
  },
})
