import { create } from "@stylexjs/stylex"

export const dialogResponsiveBackdropStyles = create({
  base: {
    "--backdrop-opacity": "var(--opacity-dialog-backdrop)",
    backgroundColor: "black",
    inset: 0,
    opacity: {
      ":is([data-ending-style], [data-starting-style])": 0,
      default: "calc(var(--backdrop-opacity) * (1 - var(--drawer-swipe-progress)))",
    },
    outlineColor: "var(--color-primary-9)",
    position: "fixed",
    transitionDuration: {
      ":is([data-ending-style])": "calc(var(--drawer-swipe-strength) * 400ms)",
      ":is([data-swiping])": "0ms",
      default: "150ms",
    },
    transitionProperty: "opacity",
  },
})
