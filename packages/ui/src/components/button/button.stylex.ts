import * as stylex from "@stylexjs/stylex"

export const buttonStyles = stylex.create({
  32: {
    height: 32,
  },
  36: {
    height: 36,
  },
  40: {
    height: 40,
  },
  44: {
    height: 44,
  },
  48: {
    height: 48,
  },
  base: {
    alignItems: "center",
    columnGap: 8,
    cursor: "pointer",
    display: "inline-flex",
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
  ghost: {
    backgroundColor: {
      ":hover:not(:disabled)": "var(--color-gray-4)",
      default: "transparent",
    },
    color: "var(--color-gray-12)",
  },
  loading: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  loadingContent: {
    color: "transparent",
    textShadow: "none",
  },
  primary: {
    backgroundColor: {
      ":hover:not(:disabled)":
        "color-mix(in oklab, var(--color-gray-12) 100%, var(--color-gray-1) 25%)",
      default: "var(--color-gray-12)",
    },
    color: "var(--color-gray-1)",
  },
  roundedBase32: {
    borderRadius: 8,
    paddingBlock: 0,
    paddingInline: 12,
  },
  roundedBase36: {
    borderRadius: 9,
    paddingBlock: 0,
    paddingInline: 14,
  },
  roundedBase40: {
    borderRadius: 10,
    paddingBlock: 0,
    paddingInline: 16,
  },
  roundedBase44: {
    borderRadius: 11,
    paddingBlock: 0,
    paddingInline: 18,
  },
  roundedBase48: {
    borderRadius: 12,
    paddingBlock: 0,
    paddingInline: 20,
  },
  roundedFull32: {
    borderRadius: 16,
    paddingBlock: 0,
    paddingInline: 12,
  },
  roundedFull36: {
    borderRadius: 18,
    paddingBlock: 0,
    paddingInline: 17,
  },
  roundedFull40: {
    borderRadius: 20,
    paddingBlock: 0,
    paddingInline: 20,
  },
  roundedFull44: {
    borderRadius: 22,
    paddingBlock: 0,
    paddingInline: 23,
  },
  roundedFull48: {
    borderRadius: 24,
    paddingBlock: 0,
    paddingInline: 28,
  },
  secondary: {
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

export const buttonRoundedBaseStyles = {
  32: buttonStyles.roundedBase32,
  36: buttonStyles.roundedBase36,
  40: buttonStyles.roundedBase40,
  44: buttonStyles.roundedBase44,
  48: buttonStyles.roundedBase48,
} as const

export const buttonRoundedFullStyles = {
  32: buttonStyles.roundedFull32,
  36: buttonStyles.roundedFull36,
  40: buttonStyles.roundedFull40,
  44: buttonStyles.roundedFull44,
  48: buttonStyles.roundedFull48,
} as const
