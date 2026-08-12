import * as stylex from "@stylexjs/stylex"

export const tabsUnderlineListStyles = stylex.create({
  base: {
    borderBottomColor: "var(--color-gray-4)",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    display: "flex",
    overflowX: "auto",
    position: "relative",
  },
})
