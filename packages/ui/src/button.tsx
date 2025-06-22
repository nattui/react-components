import type { ComponentProps, JSX, ReactNode } from "react"
import { ButtonBackground } from "@/button-background"
import { ButtonSpinner } from "@/button-spinner"
import styles from "@/button.module.css"

export interface ButtonProps
  extends Omit<ComponentProps<"button">, "aria-pressed" | "disabled"> {
  fullWidth?: boolean
  iconEnd?: ReactNode
  iconOnly?: boolean
  iconStart?: ReactNode
  isActive?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  rounded?: boolean
  size?: 32 | 36 | 40 | 48
  variant?: "accent" | "ghost" | "primary" | "secondary"
}

type ButtonPropsInternal = ButtonPropsWithIcon | ButtonPropsWithText

interface ButtonPropsWithIcon extends ButtonProps {
  children?: ReactNode
  iconOnly: true
}

interface ButtonPropsWithText extends ButtonProps {
  children?: string
  iconOnly?: false
}

export function Button(props: ButtonPropsInternal): JSX.Element {
  const {
    children = "",
    className: customClassName = "",
    fullWidth = false,
    iconEnd = "",
    iconOnly = false,
    iconStart = "",
    isActive = false,
    isDisabled = false,
    isLoading = false,
    rounded = false,
    size = 36,
    type = "button",
    variant = "primary",
    ...rest
  } = props

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
      aria-pressed={isActive}
      className={combinedClassName}
      disabled={isDisabled || isLoading}
      type={type}
      {...rest}
    >
      <ButtonBackground rounded={rounded} variant={variant} />
      {isLoading && <ButtonSpinner />}
      {!isLoading && iconStart}
      {iconOnly ? children : <span>{children}</span>}
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
