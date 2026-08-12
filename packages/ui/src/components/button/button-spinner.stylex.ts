import * as stylex from "@stylexjs/stylex"

const spinner = stylex.keyframes({
  to: {
    rotate: "1turn",
  },
})

export const buttonSpinnerStyles = stylex.create({
  1: {
    opacity: 1,
    rotate: "0deg",
  },
  10: {
    opacity: 0.325,
    rotate: "270deg",
  },
  11: {
    opacity: 0.25,
    rotate: "300deg",
  },
  12: {
    opacity: 0.15,
    rotate: "330deg",
  },
  2: {
    opacity: 0.925,
    rotate: "30deg",
  },
  3: {
    opacity: 0.85,
    rotate: "60deg",
  },
  4: {
    opacity: 0.775,
    rotate: "90deg",
  },
  5: {
    opacity: 0.7,
    rotate: "120deg",
  },
  6: {
    opacity: 0.625,
    rotate: "150deg",
  },
  7: {
    opacity: 0.55,
    rotate: "180deg",
  },
  8: {
    opacity: 0.475,
    rotate: "210deg",
  },
  9: {
    opacity: 0.4,
    rotate: "240deg",
  },
  bar: {
    "::after": {
      backgroundColor: "currentColor",
      borderRadius: 9999,
      content: '""',
      height: "100%",
      position: "absolute",
      right: 0,
      width: "50%",
    },
    height: "calc(var(--size) / 12)",
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    top: "50%",
    transformOrigin: "center left",
    transitionDuration: "150ms",
    transitionProperty: "all",
    translate: "0 -50%",
    width: "calc(var(--size) / 2)",
  },
  base: {
    animationDuration: "1000ms",
    animationIterationCount: "infinite",
    animationName: spinner,
    animationTimingFunction: "steps(12, end)",
    height: "var(--size)",
    position: "relative",
    scale: "-1 1",
    width: "var(--size)",
  },
})
