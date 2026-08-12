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
  rounded_base_32: {
    borderRadius: 8,
    paddingInline: 12,
  },
  rounded_base_36: {
    borderRadius: 9,
    paddingInline: 14,
  },
  rounded_base_40: {
    borderRadius: 10,
    paddingInline: 16,
  },
  rounded_base_44: {
    borderRadius: 11,
    paddingInline: 18,
  },
  rounded_base_48: {
    borderRadius: 12,
    paddingInline: 20,
  },
  rounded_full_32: {
    borderRadius: 16,
    paddingInline: 12,
  },
  rounded_full_36: {
    borderRadius: 18,
    paddingInline: 17,
  },
  rounded_full_40: {
    borderRadius: 20,
    paddingInline: 20,
  },
  rounded_full_44: {
    borderRadius: 22,
    paddingInline: 23,
  },
  rounded_full_48: {
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
  width_base: {
    width: "fit-content",
  },
  width_full: {
    width: "stretch",
  },
})

export const buttonStylesBy = {
  rounded: {
    base: {
      32: buttonStyles.rounded_base_32,
      36: buttonStyles.rounded_base_36,
      40: buttonStyles.rounded_base_40,
      44: buttonStyles.rounded_base_44,
      48: buttonStyles.rounded_base_48,
    },
    full: {
      32: buttonStyles.rounded_full_32,
      36: buttonStyles.rounded_full_36,
      40: buttonStyles.rounded_full_40,
      44: buttonStyles.rounded_full_44,
      48: buttonStyles.rounded_full_48,
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
    base: buttonStyles.width_base,
    full: buttonStyles.width_full,
  },
}
