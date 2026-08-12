import * as stylex from "@stylexjs/stylex"

export const tabsPillTabStyles = stylex.create({
  background: {
    backgroundColor: "var(--color-gray-3)",
    inset: 0,
    position: "absolute",
    zIndex: -2,
  },
  base: {
    "--border-radius": "12px",
    alignItems: "center",
    backgroundColor: {
      ":hover": "var(--color-gray-4)",
      ":is([data-active])": "transparent",
      default: "transparent",
    },
    borderRadius: "var(--border-radius)",
    color: {
      ":is([data-active])": "var(--color-gray-1)",
      default: "var(--color-gray-12)",
    },
    columnGap: 8,
    cursor: "pointer",
    display: "flex",
    flexShrink: 0,
    fontSize: 14,
    fontWeight: 450,
    height: 40,
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
    transitionProperty: "background-color, color",
    whiteSpace: "nowrap",
  },
  wrapper: {
    "--border-radius": "12px",
    borderRadius: "var(--border-radius)",
    display: "flex",
    flexShrink: 0,
    overflow: "hidden",
    position: "relative",
  },
})
