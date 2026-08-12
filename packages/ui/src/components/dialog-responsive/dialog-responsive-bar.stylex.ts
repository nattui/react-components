import * as stylex from "@stylexjs/stylex"

export const dialogResponsiveBarStyles = stylex.create({
  base: {
    backgroundColor: "var(--color-gray-4)",
    borderRadius: 9999,
    display: {
      "@media (max-width: 640px)": "block",
      default: "none",
    },
    height: 4,
    marginBlock: 12,
    marginInline: "auto",
    width: 48,
  },
})
