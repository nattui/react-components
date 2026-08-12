import * as stylex from "@stylexjs/stylex"

export const comboboxInputStyles = stylex.create({
  32: {
    borderRadius: 8,
    height: 32,
  },
  36: {
    borderRadius: 9,
    height: 36,
  },
  40: {
    borderRadius: 10,
    height: 40,
  },
  44: {
    borderRadius: 11,
    height: 44,
  },
  48: {
    borderRadius: 12,
    height: 48,
  },
  base: {
    alignItems: "center",
    backgroundColor: {
      ":is([data-disabled])": "var(--color-gray-3)",
      ":is([data-popup-open])": "var(--color-gray-3)",
      default: "var(--color-bg-shell-inner)",
      [stylex.when.descendant(":disabled")]: "var(--color-gray-3)",
    },
    boxShadow: {
      ":hover:not([data-disabled], :has(:disabled))": "inset 0 0 0 1px var(--color-gray-6)",
      default: "inset 0 0 0 1px var(--color-border)",
    },
    columnGap: 8,
    cursor: {
      ":is([data-disabled])": "not-allowed",
      default: "text",
      [stylex.when.descendant(":disabled")]: "not-allowed",
    },
    display: "inline-flex",
    flexShrink: 0,
    opacity: {
      ":is([data-disabled])": 0.5,
      default: 1,
      [stylex.when.descendant(":disabled")]: 0.5,
    },
    outlineColor: {
      ":focus-within": "var(--color-primary)",
      default: "transparent",
    },
    outlineOffset: 2,
    outlineStyle: "solid",
    outlineWidth: 2,
    overflow: "hidden",
    paddingBlock: 0,
    paddingInline: 16,
    transitionDuration: "150ms",
    transitionProperty: "background-color, box-shadow",
    width: "stretch",
  },
  icon: {
    alignItems: "center",
    display: "flex",
    height: 16,
    justifyContent: "center",
    rotate: {
      default: "0deg",
      [stylex.when.ancestor("[data-popup-open]")]: "180deg",
    },
    transitionDuration: "150ms",
    transitionProperty: "rotate",
    width: 16,
  },
  input: {
    "::placeholder": {
      color: "var(--color-gray-9)",
      userSelect: "none",
    },
    appearance: "none",
    backgroundColor: "transparent",
    borderStyle: "none",
    color: "var(--color-text-primary)",
    cursor: {
      ":disabled": "not-allowed",
      default: "text",
    },
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    fontSize: 14,
    fontWeight: 450,
    height: "100%",
    minWidth: 0,
    outline: "none",
    padding: 0,
  },
  roundedFull: {
    borderRadius: 9999,
  },
  trigger: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderStyle: "none",
    color: "inherit",
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    display: "flex",
    flexShrink: 0,
    height: "100%",
    justifyContent: "center",
    marginLeft: "auto",
    padding: 0,
    width: 16,
  },
})
