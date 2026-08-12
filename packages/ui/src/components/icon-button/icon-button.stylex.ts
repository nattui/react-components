import { create } from "@stylexjs/stylex"

export const iconButtonStyles = create({
  base: {
    paddingInline: 0,
  },
  size_32: {
    width: 32,
  },
  size_36: {
    width: 36,
  },
  size_40: {
    width: 40,
  },
  size_44: {
    width: 44,
  },
  size_48: {
    width: 48,
  },
})

export const iconButtonStylesBy = {
  size: {
    32: iconButtonStyles.size_32,
    36: iconButtonStyles.size_36,
    40: iconButtonStyles.size_40,
    44: iconButtonStyles.size_44,
    48: iconButtonStyles.size_48,
  },
}
