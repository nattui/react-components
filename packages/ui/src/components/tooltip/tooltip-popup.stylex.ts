import * as stylex from "@stylexjs/stylex"

export const tooltipPopupStyles = stylex.create({
  base: {
    backgroundColor: "var(--color-tooltip-bg)",
    borderRadius: 8,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    color: "var(--color-tooltip)",
    fontSize: 13,
    fontWeight: 450,
    opacity: {
      ":is([data-ending-style], [data-starting-style])": 0,
      default: 1,
    },
    paddingBlock: 4,
    paddingInline: 8,
    scale: {
      ":is([data-ending-style], [data-starting-style])": 0.975,
      default: 1,
    },
    transformOrigin: "var(--transform-origin)",
    transitionDuration: {
      ":is([data-instant])": "0ms",
      default: "150ms",
    },
    transitionProperty: {
      ":is([data-instant])": "none",
      default: "opacity, scale",
    },
  },
  portal: {
    isolation: "isolate",
    position: "relative",
    zIndex: 50,
  },
  positioner: {
    isolation: "isolate",
    zIndex: 50,
  },
})
