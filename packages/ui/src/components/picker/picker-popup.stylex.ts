import { create } from "@stylexjs/stylex"

export const pickerPopupStyles = create({
  base: {
    backgroundColor: "var(--color-bg-shell-inner)",
    borderColor: "var(--color-border)",
    borderRadius: 12,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow:
      "0 0.5px 0 color-mix(in oklab, black 3%, transparent), 0 36px 15px -4px color-mix(in oklab, black 1%, transparent), 0 20px 12px -3px color-mix(in oklab, black 3%, transparent), 0 9px 9px -2px color-mix(in oklab, black 4%, transparent), 0 2px 5px -1px color-mix(in oklab, black 5%, transparent)",
    color: "var(--color-text-primary)",
    display: "flex",
    flexDirection: "column",
    maxHeight: "min(var(--available-height), 480px)",
    maxWidth: "var(--available-width)",
    minWidth: "max(var(--anchor-width), 240px)",
    opacity: {
      ":is([data-ending-style], [data-starting-style])": 0,
      default: 1,
    },
    outlineColor: "var(--color-primary-9)",
    outlineOffset: -2,
    outlineStyle: "solid",
    outlineWidth: {
      ":focus-visible": 2,
      default: 0,
    },
    overflow: "hidden",
    transform: {
      ":is([data-ending-style], [data-starting-style])": "scale(0.975)",
      ':is([data-side="bottom"][data-ending-style], [data-side="bottom"][data-starting-style])':
        "scale(0.975) translateY(-4px)",
      ':is([data-side="inline-end"][data-ending-style], [data-side="inline-end"][data-starting-style], [data-side="right"][data-ending-style], [data-side="right"][data-starting-style])':
        "scale(0.975) translateX(-4px)",
      ':is([data-side="inline-start"][data-ending-style], [data-side="inline-start"][data-starting-style], [data-side="left"][data-ending-style], [data-side="left"][data-starting-style])':
        "scale(0.975) translateX(4px)",
      ':is([data-side="top"][data-ending-style], [data-side="top"][data-starting-style])':
        "scale(0.975) translateY(4px)",
      default: "none",
    },
    transformOrigin: "var(--transform-origin)",
    transitionDuration: "150ms",
    transitionProperty: "opacity, transform",
    width: "var(--anchor-width)",
    willChange: "opacity, transform",
  },
  positioner: {
    isolation: "isolate",
    zIndex: 50,
  },
})
