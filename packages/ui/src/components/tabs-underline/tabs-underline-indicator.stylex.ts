import { create } from "@stylexjs/stylex"

export const tabsUnderlineIndicatorStyles = create({
  base: {
    backgroundColor: "var(--color-accent-9)",
    bottom: 0,
    height: 2,
    left: "var(--active-tab-left)",
    position: "absolute",
    transitionDuration: "150ms",
    transitionProperty: "left, width",
    width: "var(--active-tab-width)",
  },
})
