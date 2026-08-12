import * as stylex from "@stylexjs/stylex"

export const inputStyles = stylex.create({
  32: {
    borderRadius: 8,
    minHeight: 32,
    paddingBlock: 0,
    paddingInline: 8,
  },
  36: {
    borderRadius: 9,
    minHeight: 36,
    paddingBlock: 0,
    paddingInline: 10,
  },
  40: {
    borderRadius: 10,
    minHeight: 40,
    paddingBlock: 0,
    paddingInline: 12,
  },
  44: {
    borderRadius: 11,
    minHeight: 44,
    paddingBlock: 0,
    paddingInline: 14,
  },
  48: {
    borderRadius: 12,
    minHeight: 48,
    paddingBlock: 0,
    paddingInline: 16,
  },
  base: {
    "::placeholder": {
      color: "var(--color-gray-9)",
      userSelect: "none",
    },
    appearance: "none",
    backgroundColor: "var(--color-bg-shell-inner)",
    borderStyle: "none",
    boxShadow: {
      ":enabled:active": "inset 0 0 0 1px var(--color-gray-6)",
      ":enabled:focus": "inset 0 0 0 1px var(--color-gray-6)",
      ":enabled:hover": "inset 0 0 0 1px var(--color-gray-6)",
      ':enabled[data-is-active="true"]': "inset 0 0 0 1px var(--color-gray-6)",
      default: "inset 0 0 0 1px var(--color-border)",
    },
    color: "var(--color-text-primary)",
    cursor: {
      ":disabled": "not-allowed",
      default: "text",
    },
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    outlineColor: {
      ":focus-visible": "var(--color-outline)",
      ':is([data-is-invalid="true"])': "#e5484d",
      ':is([data-is-valid="true"])': "#30a46c",
      default: "transparent",
    },
    outlineOffset: -2,
    outlineStyle: "solid",
    outlineWidth: 2,
    textDecoration: "none",
    transitionDuration: "150ms",
    transitionProperty: "box-shadow, opacity",
    width: "100%",
  },
  roundedBase: {
    borderRadius: 12,
  },
  roundedFull: {
    borderRadius: 9999,
  },
})
