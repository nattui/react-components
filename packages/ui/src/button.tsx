import type { ComponentProps, JSX, ReactNode } from "react"
import { ButtonBackground } from "@/button-background"
import { ButtonSpinner } from "@/button-spinner"
import styles from "@/button.module.css"

export interface ButtonProps extends ComponentProps<"button"> {
  fullWidth?: boolean
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isLoading?: boolean
  rounded?: boolean
  size?: 32 | 36 | 40 | 48
  variant?: "accent" | "ghost" | "primary" | "secondary"
}

export function Button(properties: ButtonProps): JSX.Element {
  const {
    children = "",
    className: customClassName = "",
    disabled = false,
    fullWidth = false,
    iconEnd = "",
    iconStart = "",
    isLoading = false,
    rounded = false,
    size = 36,
    type = "button",
    variant = "primary",
    ...rest
  } = properties

  const combinedClassName = `
    ${buttonClassName.base}
    ${buttonClassName.size[size]}
    ${buttonClassName.variant[variant]}
    ${rounded ? buttonClassName.rounded.full : buttonClassName.rounded.base}
    ${fullWidth ? buttonClassName.width.full : buttonClassName.width.base}
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
      <ButtonBackground rounded={rounded} variant={variant} />
      {isLoading && <ButtonSpinner />}
      {!isLoading && iconStart}
      <span>{children}</span>
      {!isLoading && iconEnd}
    </button>
  )
}

export const buttonClassName = {
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
} as const
