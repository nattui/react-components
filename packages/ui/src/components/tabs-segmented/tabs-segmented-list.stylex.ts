import * as stylex from "@stylexjs/stylex"

export const tabsSegmentedListStyles = stylex.create({
  base: {
    backgroundColor: "var(--color-gray-3)",
    borderRadius: 12,
    display: "flex",
    height: 40,
    isolation: "isolate",
    overflowX: "auto",
    padding: 2,
    position: "relative",
    width: "fit-content",
  },
})
