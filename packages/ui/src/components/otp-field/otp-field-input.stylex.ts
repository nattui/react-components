import { create } from "@stylexjs/stylex"

export const otpFieldInputStyles = create({
  base: {
    backgroundColor: "var(--color-neutral-3)",
    borderRadius: 14,
    boxShadow: {
      ":enabled:hover": "inset 0 0 0 1px var(--color-neutral-6)",
      default: "inset 0 0 0 1px var(--color-border)",
    },
    color: "var(--color-text-primary)",
    cursor: {
      ":disabled": "not-allowed",
      default: "text",
    },
    fontSize: 14,
    fontWeight: 450,
    height: 48,
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    outlineColor: "var(--color-outline)",
    outlineOffset: -2,
    outlineStyle: "solid",
    outlineWidth: {
      ":focus-visible": 2,
      default: 0,
    },
    textAlign: "center",
    transitionDuration: "150ms",
    transitionProperty: "box-shadow",
    width: 40,
  },
})
