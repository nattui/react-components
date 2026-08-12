import { create } from "@stylexjs/stylex"

export const tabsSegmentedTabStyles = create({
  base: {
    alignItems: "center",
    borderRadius: 10,
    color: {
      ":hover": "var(--color-gray-12)",
      ":is([data-active])": "var(--color-gray-12)",
      default: "var(--color-gray-11)",
    },
    columnGap: 8,
    cursor: "pointer",
    display: "flex",
    flexShrink: 0,
    fontSize: 14,
    fontWeight: 450,
    height: "100%",
    justifyContent: "center",
    outlineColor: "var(--color-primary-9)",
    outlineOffset: -4,
    outlineStyle: "solid",
    outlineWidth: {
      ":focus-visible": 2,
      default: 0,
    },
    paddingBlock: 0,
    paddingInline: 14,
    transitionDuration: "150ms",
    transitionProperty: "color",
    whiteSpace: "nowrap",
  },
})
