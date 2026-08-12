import { create } from "@stylexjs/stylex"

export const dialogResponsivePopupStyles = create({
  base: {
    "--radius-mobile": {
      "@media (max-width: 640px)": "24px",
      default: "16px",
    },
    backgroundColor: "var(--color-gray-1)",
    borderBottomLeftRadius: {
      "@media (max-width: 640px)": 0,
      default: 16,
    },
    borderBottomRightRadius: {
      "@media (max-width: 640px)": 0,
      default: 16,
    },
    borderTopLeftRadius: {
      "@media (max-width: 640px)": "var(--radius-mobile)",
      default: 16,
    },
    borderTopRightRadius: {
      "@media (max-width: 640px)": "var(--radius-mobile)",
      default: 16,
    },
    cursor: "auto",
    display: "flex",
    flexDirection: "column",
    maxWidth: 640,
    opacity: {
      ":is([data-ending-style], [data-starting-style])": 0,
      "@media (max-width: 640px)": {
        ":is([data-ending-style], [data-starting-style])": 1,
        default: 1,
      },
      default: 1,
    },
    outlineColor: "var(--color-primary-9)",
    outlineOffset: -4,
    outlineStyle: "solid",
    outlineWidth: {
      ":focus-visible": 2,
      default: 0,
    },
    padding: 16,
    paddingTop: {
      "@media (max-width: 640px)": 0,
      default: 16,
    },
    transform: {
      ":is([data-ending-style], [data-starting-style])": "scale(0.975)",
      "@media (max-width: 640px)": {
        ":is([data-ending-style], [data-starting-style])": "scale(1) translateY(100%)",
        default: "translateY(var(--drawer-swipe-movement-y))",
      },
      default: "none",
    },
    transitionDuration: {
      "@media (max-width: 640px)": {
        ":is([data-ending-style])": "calc(var(--drawer-swipe-strength) * 300ms)",
        default: "450ms",
      },
      default: "150ms",
    },
    transitionProperty: {
      "@media (max-width: 640px)": "transform",
      default: "opacity, transform",
    },
    transitionTimingFunction: {
      "@media (max-width: 640px)": "cubic-bezier(0.32, 0.72, 0, 1)",
      default: "ease",
    },
    userSelect: {
      ":is([data-swiping])": "none",
      default: "auto",
    },
    width: "100%",
    willChange: "opacity, transform",
  },
})
