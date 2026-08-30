import { create } from "@stylexjs/stylex"

export const switchStyles = create({
  base: {
    backgroundColor: {
      ":is([data-checked])": "var(--color-accent-9)",
      default: "var(--color-neutral-6)",
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
    outlineColor: "var(--color-accent-9)",
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
  size_18: {
    "--translateX": "12px",
    height: 18,
    width: 30,
  },
  size_24: {
    "--translateX": "16px",
    height: 24,
    width: 40,
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

export const switchStylesBy = {
  size: {
    18: switchStyles.size_18,
    24: switchStyles.size_24,
  },
}
