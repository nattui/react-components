import * as stylex from "@stylexjs/stylex"

export const tabsPanelStyles = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    outlineColor: {
      ":focus-visible": "var(--color-primary-9)",
      default: "transparent",
    },
    outlineOffset: -2,
    outlineStyle: "solid",
    outlineWidth: {
      ":focus-visible": 2,
      default: 0,
    },
  },
})
