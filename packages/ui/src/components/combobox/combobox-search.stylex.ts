import { create } from "@stylexjs/stylex"

export const comboboxSearchStyles = create({
  base: {
    alignItems: "center",
    backgroundColor: "var(--color-bg-shell-inner)",
    boxShadow: "inset 0 -1px 0 var(--color-border)",
    columnGap: 8,
    display: "flex",
    flexShrink: 0,
    height: 40,
    paddingBlock: 0,
    paddingInline: 16,
  },
  icon: {
    alignItems: "center",
    color: "var(--color-gray-9)",
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
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
    fontWeight: 400,
    height: "100%",
    minWidth: 0,
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    outline: "none",
    padding: 0,
  },
})
