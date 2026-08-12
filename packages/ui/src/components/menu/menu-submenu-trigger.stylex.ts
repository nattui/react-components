import * as stylex from "@stylexjs/stylex"

export const menuSubmenuTriggerStyles = stylex.create({
  base: {
    backgroundColor: {
      ":is([data-popup-open])": "var(--color-gray-3)",
      default: "transparent",
    },
  },
  icon: {
    alignItems: "center",
    color: "var(--color-text-secondary)",
    display: "flex",
    flexShrink: 0,
    height: 16,
    justifyContent: "center",
    marginLeft: "auto",
    width: 16,
  },
})
