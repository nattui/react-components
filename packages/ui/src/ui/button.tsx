import type { ComponentProps, JSX, ReactNode } from "react"
import { ButtonBackground } from "@/ui/button-background"
import { ButtonSpinner } from "@/ui/button-spinner"
import styles from "@/ui/button.module.css"

export type ButtonProps = ButtonPropsWithIcon | ButtonPropsWithText

interface ButtonPropsBase extends ComponentProps<"button"> {
  fullWidth?: boolean
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isLoading?: boolean
  rounded?: boolean
  size?: 32 | 36 | 40 | 48
  variant?: "accent" | "ghost" | "primary" | "secondary"
}

interface ButtonPropsWithIcon extends ButtonPropsBase {
  children?: ReactNode
  iconOnly: true
}

interface ButtonPropsWithText extends ButtonPropsBase {
  children?: string
  iconOnly?: false
}

export function Button(properties: ButtonProps): JSX.Element {
  const {
    children = "",
    className: customClassName = "",
    disabled = false,
    fullWidth = false,
    iconEnd = "",
    iconOnly = false,
    iconStart = "",
    isLoading = false,
    rounded = false,
    size = 36,
    type = "button",
    variant = "primary",
    ...rest
  } = properties

  const combinedClassName = `
    ${BUTTON_CLASS_NAME.BASE}
    ${BUTTON_CLASS_NAME.SIZE[size]}
    ${BUTTON_CLASS_NAME.VARIANT[variant.toUpperCase() as keyof typeof BUTTON_CLASS_NAME.VARIANT]}
    ${fullWidth ? BUTTON_CLASS_NAME.WIDTH.FULL : BUTTON_CLASS_NAME.WIDTH.BASE}
    ${iconOnly ? BUTTON_CLASS_NAME.ICON_ONLY : ""}
    ${rounded ? BUTTON_CLASS_NAME.ROUNDED.FULL : BUTTON_CLASS_NAME.ROUNDED.BASE}
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
      {children}
      {!isLoading && iconEnd}
    </button>
  )
}

export const BUTTON_CLASS_NAME = {
  BASE: styles.button,
  ICON_ONLY: styles.button__icon_only,
  ROUNDED: {
    BASE: styles.button__rounded_base,
    FULL: styles.button__rounded_full,
  },
  SIZE: {
    32: styles.button__size_32,
    36: styles.button__size_36,
    40: styles.button__size_40,
    48: styles.button__size_48,
  },
  VARIANT: {
    ACCENT: styles.button__variant_accent,
    GHOST: styles.button__variant_ghost,
    PRIMARY: styles.button__variant_primary,
    SECONDARY: styles.button__variant_secondary,
  },
  WIDTH: {
    BASE: styles.button__width_base,
    FULL: styles.button__width_full,
  },
} as const
