import * as stylex from "@stylexjs/stylex"

export const switchStyles = stylex.create({
  18: {
    "--translateX": "12px",
    height: 18,
    width: 30,
  },
  24: {
    "--translateX": "16px",
    height: 24,
    width: 40,
  },
  base: {
    backgroundColor: {
      ":is([data-checked])": "var(--color-primary-9)",
      default: "var(--color-gray-6)",
    },
    borderRadius: 9999,
    cursor: {
      ":is([data-disabled])": "not-allowed",
      default: "pointer",
    },
    display: "flex",
    flexShrink: 0,
    opacity: {
      ":is([data-disabled])": 0.5,
      default: 1,
    },
    outlineColor: "var(--color-primary-9)",
    outlineOffset: 2,
    outlineStyle: "solid",
    outlineWidth: {
      ":focus-visible": 2,
      default: 0,
    },
    overflow: "hidden",
    padding: 2,
    transitionDuration: "150ms",
    transitionProperty: "background-color",
  },
  thumb: {
    aspectRatio: "1 / 1",
    backgroundColor: "white",
    borderRadius: 9999,
    height: "100%",
    transform: {
      ":is([data-checked])": "translateX(var(--translateX))",
      default: "none",
    },
    transitionDuration: "150ms",
    transitionProperty: "transform",
  },
})
