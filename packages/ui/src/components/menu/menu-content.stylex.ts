import { create } from "@stylexjs/stylex"

export const menuContentStyles = create({
  base: {
    maxWidth: "min(var(--available-width), 320px)",
    minWidth: 180,
    width: "max-content",
  },
})
