import { create } from "@stylexjs/stylex"

export const pickerItemStyles = create({
  base: {
    alignItems: "center",
    backgroundColor: {
      ":is([data-highlighted]:not([data-disabled]))": "var(--color-gray-3)",
      ":is([data-highlighted][data-disabled]:not(:hover))": "var(--color-gray-3)",
      default: "transparent",
    },
    borderRadius: 8,
    columnGap: 8,
    cursor: {
      ":is([data-disabled])": "not-allowed",
      default: "pointer",
    },
    display: "flex",
    flexShrink: 0,
    height: 36,
    opacity: {
      ":is([data-disabled])": 0.5,
      default: 1,
    },
    outline: "none",
    paddingBlock: 0,
    paddingInline: 12,
    userSelect: "none",
  },
  indicator: {
    alignItems: "center",
    color: "var(--color-primary-9)",
    display: "flex",
    flexShrink: 0,
    height: 16,
    justifyContent: "center",
    marginLeft: "auto",
    width: 16,
  },
  label: {
    color: "var(--color-text-primary)",
    fontSize: 14,
    fontWeight: 450,
    overflowX: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
})
