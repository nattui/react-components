import { create } from "@stylexjs/stylex"

export const checkboxStyles = create({
  base: {
    "--size": "16px",
    alignItems: "center",
    backgroundColor: {
      ":hover": "var(--color-neutral-3)",
      ":is([data-checked])": "var(--color-accent)",
      default: "var(--color-bg-shell-inner)",
    },
    borderColor: {
      ":hover": "var(--color-neutral-6)",
      ":is([data-checked])": "transparent",
      default: "var(--color-border)",
    },
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    cursor: "pointer",
    display: "flex",
    height: "var(--size)",
    justifyContent: "center",
    outlineColor: "var(--color-accent)",
    outlineOffset: 2,
    outlineStyle: "solid",
    outlineWidth: {
      ":focus-visible": 2,
      default: 0,
    },
    transitionDuration: "150ms",
    transitionProperty: "background-color, border-color",
    width: "var(--size)",
  },
  icon: {
    "--size": "12px",
    height: "var(--size)",
    width: "var(--size)",
  },
  icon_path: {
    stroke: "white",
    strokeWidth: 3,
  },
  indicator: {
    opacity: {
      ":is([data-checked])": 1,
      default: 0,
    },
    transitionDuration: "150ms",
    transitionProperty: "opacity",
  },
})
