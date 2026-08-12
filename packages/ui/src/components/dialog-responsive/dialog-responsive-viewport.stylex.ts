import { create } from "@stylexjs/stylex"

export const dialogResponsiveViewportStyles = create({
  base: {
    alignItems: {
      "@media (max-width: 640px)": "safe flex-end",
      default: "safe center",
    },
    cursor: "pointer",
    display: "flex",
    inset: 0,
    justifyContent: "safe center",
    padding: {
      "@media (max-width: 640px)": "48px 0 0",
      default: 24,
    },
    position: "fixed",
  },
})
