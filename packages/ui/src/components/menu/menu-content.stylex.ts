import * as stylex from "@stylexjs/stylex"

export const menuContentStyles = stylex.create({
  base: {
    maxWidth: "min(var(--available-width), 320px)",
    minWidth: 180,
    width: "max-content",
  },
})
