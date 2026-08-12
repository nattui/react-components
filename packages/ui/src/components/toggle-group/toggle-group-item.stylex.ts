import { create } from "@stylexjs/stylex"

export const toggleGroupItemStyles = create({
  base: {
    alignItems: "center",
    backgroundColor: {
      ":hover:not(:disabled)": "var(--color-gray-4)",
      ":is([data-pressed])": "var(--color-gray-3)",
      default: "transparent",
    },
    borderRadius: 10,
    boxShadow: {
      ":is([data-pressed])": "inset 0 0 0 1px var(--color-primary)",
      default: "none",
    },
    color: {
      ":is([data-pressed])": "var(--color-text-primary)",
      default: "var(--color-text-secondary)",
    },
    columnGap: 8,
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    display: "flex",
    fontSize: 14,
    fontWeight: 450,
    justifyContent: "center",
    opacity: {
      ":disabled": 0.5,
      default: 1,
    },
    outlineColor: "var(--color-outline)",
    outlineOffset: 2,
    outlineStyle: "solid",
    outlineWidth: {
      ":focus-visible": 2,
      default: 0,
    },
    paddingBlock: 8,
    paddingInline: 12,
    transitionDuration: "150ms",
    transitionProperty: "background-color, box-shadow, color",
    userSelect: "none",
  },
  icon: {
    height: 16,
    width: 16,
  },
})
