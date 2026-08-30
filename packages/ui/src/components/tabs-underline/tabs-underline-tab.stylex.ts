import { create } from "@stylexjs/stylex"

export const tabsUnderlineTabStyles = create({
  base: {
    alignItems: "center",
    borderRadius: 8,
    color: {
      ":hover": "var(--color-neutral-12)",
      ":is([data-active])": "var(--color-neutral-12)",
      default: "var(--color-neutral-11)",
    },
    columnGap: 8,
    cursor: "pointer",
    display: "flex",
    flexShrink: 0,
    fontSize: 14,
    fontWeight: 450,
    marginBottom: 6,
    outlineColor: "var(--color-accent-9)",
    outlineOffset: -2,
    outlineStyle: "solid",
    outlineWidth: {
      ":focus-visible": 2,
      default: 0,
    },
    paddingBlock: 6,
    paddingInline: 12,
    transitionDuration: "150ms",
    transitionProperty: "color",
    whiteSpace: "nowrap",
  },
})
