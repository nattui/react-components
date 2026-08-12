import { create } from "@stylexjs/stylex"

export const buttonStyles = create({
  base: {
    alignItems: "center",
    columnGap: 8,
    cursor: "pointer",
    display: "inline-flex",
    flexShrink: 0,
    fontSize: 14,
    fontWeight: 450,
    justifyContent: "center",
    outlineColor: {
      ":focus-visible": "var(--color-outline)",
      default: "transparent",
    },
    outlineOffset: 2,
    outlineStyle: "solid",
    outlineWidth: 2,
    overflow: "hidden",
    position: "relative",
    transitionDuration: "150ms",
    transitionProperty: "background-color, box-shadow, translate",
    translate: {
      ":active:not(:disabled)": "0 1px",
      default: "0 0",
    },
    userSelect: "none",
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  roundedBase_32: {
    borderRadius: 8,
    paddingInline: 12,
  },
  roundedBase_36: {
    borderRadius: 9,
    paddingInline: 14,
  },
  roundedBase_40: {
    borderRadius: 10,
    paddingInline: 16,
  },
  roundedBase_44: {
    borderRadius: 11,
    paddingInline: 18,
  },
  roundedBase_48: {
    borderRadius: 12,
    paddingInline: 20,
  },
  roundedFull_32: {
    borderRadius: 16,
    paddingInline: 12,
  },
  roundedFull_36: {
    borderRadius: 18,
    paddingInline: 17,
  },
  roundedFull_40: {
    borderRadius: 20,
    paddingInline: 20,
  },
  roundedFull_44: {
    borderRadius: 22,
    paddingInline: 23,
  },
  roundedFull_48: {
    borderRadius: 24,
    paddingInline: 28,
  },
  size_32: {
    height: 32,
  },
  size_36: {
    height: 36,
  },
  size_40: {
    height: 40,
  },
  size_44: {
    height: 44,
  },
  size_48: {
    height: 48,
  },
  variant_ghost: {
    backgroundColor: {
      ":hover:not(:disabled)": "var(--color-gray-4)",
      default: "transparent",
    },
    color: "var(--color-gray-12)",
  },
  variant_primary: {
    backgroundColor: {
      ":hover:not(:disabled)":
        "color-mix(in oklab, var(--color-gray-12) 100%, var(--color-gray-1) 25%)",
      default: "var(--color-gray-12)",
    },
    color: "var(--color-gray-1)",
  },
  variant_secondary: {
    backgroundColor: {
      ":hover:not(:disabled)": "var(--color-gray-4)",
      default: "var(--color-bg-shell-inner)",
    },
    boxShadow: {
      ":hover:not(:disabled)": "none",
      default: "inset 0 0 0 1px var(--color-border)",
    },
    color: "var(--color-gray-12)",
  },
  widthBase: {
    width: "fit-content",
  },
  widthFull: {
    width: "stretch",
  },
})

export const buttonStylesBy = {
  rounded: {
    base: {
      32: buttonStyles.roundedBase_32,
      36: buttonStyles.roundedBase_36,
      40: buttonStyles.roundedBase_40,
      44: buttonStyles.roundedBase_44,
      48: buttonStyles.roundedBase_48,
    },
    full: {
      32: buttonStyles.roundedFull_32,
      36: buttonStyles.roundedFull_36,
      40: buttonStyles.roundedFull_40,
      44: buttonStyles.roundedFull_44,
      48: buttonStyles.roundedFull_48,
    },
  },
  size: {
    32: buttonStyles.size_32,
    36: buttonStyles.size_36,
    40: buttonStyles.size_40,
    44: buttonStyles.size_44,
    48: buttonStyles.size_48,
  },
  variant: {
    ghost: buttonStyles.variant_ghost,
    primary: buttonStyles.variant_primary,
    secondary: buttonStyles.variant_secondary,
  },
  width: {
    base: buttonStyles.widthBase,
    full: buttonStyles.widthFull,
  },
}
