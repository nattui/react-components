import { cva } from "class-variance-authority"
import type { JSX, ReactNode } from "react"
import type { ButtonProps } from "../button/button"
import { ButtonSpinner } from "../button/button-spinner"
import buttonStyles from "../button/button.module.css"
import styles from "./icon-button.module.css"

interface IconButtonProps extends Omit<
  ButtonProps,
  "children" | "iconEnd" | "iconStart" | "isFullWidth"
> {
  children?: ReactNode
}

export function IconButton(props: IconButtonProps): JSX.Element {
  const {
    children = "",
    className = "",
    isDisabled = false,
    isLoading = false,
    isRounded = false,
    variant = "primary",
    size = 40,
    ...rest
  } = props

  return (
    <button
      className={iconButton({
        className,
        isDisabled,
        isLoading,
        isRounded,
        size,
        variant,
      })}
      disabled={isDisabled || isLoading}
      type="button"
      {...rest}
    >
      {isLoading && <ButtonSpinner />}
      {children}
    </button>
  )
}

export const iconButton = cva([buttonStyles.base, styles.base], {
  variants: {
    isDisabled: {
      true: buttonStyles.disabled,
    },
    isLoading: {
      true: buttonStyles.loading,
    },
    isRounded: {
      false: buttonStyles.rounded_base,
      true: buttonStyles.rounded_full,
    },
    size: {
      32: styles.size_32,
      36: styles.size_36,
      40: styles.size_40,
      44: styles.size_44,
      48: styles.size_48,
    },
    variant: {
      ghost: buttonStyles.variant_ghost,
      primary: buttonStyles.variant_primary,
      secondary: buttonStyles.variant_secondary,
    },
  },
})
