import { create } from "@stylexjs/stylex"

export const tabsSegmentedIndicatorStyles = create({
  base: {
    backgroundColor: "var(--color-neutral-1)",
    borderRadius: 10,
    height: "var(--active-tab-height)",
    left: "var(--active-tab-left)",
    position: "absolute",
    top: "var(--active-tab-top)",
    transitionDuration: "150ms",
    transitionProperty: "left, width",
    width: "var(--active-tab-width)",
    zIndex: -1,
  },
})
