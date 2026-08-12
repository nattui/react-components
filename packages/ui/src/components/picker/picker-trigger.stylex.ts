import { create, when } from "@stylexjs/stylex"

export const pickerTriggerStyles = create({
  base: {
    alignItems: "center",
    backgroundColor: {
      ":disabled": "var(--color-gray-3)",
      ":is([data-popup-open])": "var(--color-gray-3)",
      default: "var(--color-bg-shell-inner)",
    },
    boxShadow: {
      ":hover:not(:disabled, [data-popup-open])": "inset 0 0 0 1px var(--color-gray-6)",
      ":is([data-popup-open])": "inset 0 0 0 1px transparent",
      default: "inset 0 0 0 1px var(--color-border)",
    },
    columnGap: 8,
    cursor: {
      ":disabled": "not-allowed",
      default: "pointer",
    },
    display: "inline-flex",
    flexShrink: 0,
    opacity: {
      ":disabled": "var(--opacity-picker-disabled)",
      default: 1,
    },
    outlineColor: {
      ":focus-visible": "var(--color-primary)",
      default: "transparent",
    },
    outlineOffset: 2,
    outlineStyle: "solid",
    outlineWidth: 2,
    overflow: "hidden",
    paddingBlock: 0,
    paddingInline: 16,
    transitionDuration: "150ms",
    transitionProperty: "background-color, box-shadow",
    width: "stretch",
  },
  icon: {
    alignItems: "center",
    display: "flex",
    height: 16,
    justifyContent: "center",
    marginLeft: "auto",
    rotate: {
      default: "0deg",
      [when.ancestor("[data-popup-open]")]: "180deg",
    },
    transitionDuration: "150ms",
    transitionProperty: "rotate",
    width: 16,
  },
  rounded_full: {
    borderRadius: 9999,
  },
  size_32: {
    borderRadius: 8,
    height: 32,
  },
  size_36: {
    borderRadius: 9,
    height: 36,
  },
  size_40: {
    borderRadius: 10,
    height: 40,
  },
  size_44: {
    borderRadius: 11,
    height: 44,
  },
  size_48: {
    borderRadius: 12,
    height: 48,
  },
})

export const pickerTriggerStylesBy = {
  rounded: {
    full: pickerTriggerStyles.rounded_full,
  },
  size: {
    32: pickerTriggerStyles.size_32,
    36: pickerTriggerStyles.size_36,
    40: pickerTriggerStyles.size_40,
    44: pickerTriggerStyles.size_44,
    48: pickerTriggerStyles.size_48,
  },
}
