import { create } from "@stylexjs/stylex"

export const button2Styles = create({
  base: {
    alignItems: "center",
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 1,
    columnGap: 8,
    cursor: "pointer",
    display: "inline-flex",
    flexShrink: 0,
    fontSize: 14,
    fontWeight: 450,
    justifyContent: "center",
    outlineColor: {
      ":focus-visible": "var(--color-outline)",
      default: "transparent",
    },
    outlineOffset: 2,
    outlineStyle: "solid",
    outlineWidth: 2,
    overflow: "hidden",
    position: "relative",
    transitionDuration: "150ms",
    transitionProperty: "background-color, box-shadow, translate",
    translate: {
      ":active:not(:disabled)": "0 1px",
      default: "0 0",
    },
    userSelect: "none",
  },
})
