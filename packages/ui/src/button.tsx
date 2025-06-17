import { type ComponentProps } from "react"
import styles from "@/button.module.css"

export interface ButtonProperties extends ComponentProps<"button"> {
  fullWidth?: boolean
  isLoading?: boolean
  rounded?: boolean
  size?: 32 | 36 | 40 | 48
  variant?: "primary" | "secondary"
}

export const buttonStyles = {
  base: styles.button,
  rounded: {
    base: styles.button__rounded_base,
    full: styles.button__rounded_full,
  },
  size: {
    32: styles.button__size_32,
    36: styles.button__size_36,
    40: styles.button__size_40,
    48: styles.button__size_48,
  },
  variant: {
    accent: styles.button__variant_accent,
    ghost: styles.button__variant_ghost,
    primary: styles.button__variant_primary,
    secondary: styles.button__variant_secondary,
  },
  width: {
    base: styles.button__width_base,
    full: styles.button__width_full,
  },
}

export function Button(properties: ButtonProperties) {
  const {
    children = "",
    className: customClassName = "",
    disabled = false,
    fullWidth = false,
    isLoading = false,
    rounded = false,
    size = 36,
    type = "button",
    variant = "primary",
    ...rest
  } = properties

  const combinedClassName = `
    ${buttonStyles.base}
    ${buttonStyles.size[size]}
    ${buttonStyles.variant[variant]}
    ${rounded ? buttonStyles.rounded.full : buttonStyles.rounded.base}
    ${fullWidth ? buttonStyles.width.full : buttonStyles.width.base}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      type={type}
      {...rest}
    >
      <span>{children}</span>
    </button>
  )
}
