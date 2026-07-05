// oxlint-disable complexity react/button-has-type unicorn/no-nested-ternary

import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, JSX, ReactNode } from "react"
import { ButtonSpinner } from "./button-spinner"
import styles from "./button.module.css"

export interface ButtonIconProps extends ButtonInternalProps {
  children?: ReactNode
  iconEnd?: never
  iconStart?: never
  isIconOnly: true
}

export interface ButtonProps extends ButtonInternalProps {
  children?: number | number[] | string | string[]
  isIconOnly?: false
}

interface ButtonInternalProps extends Omit<ComponentProps<"button">, "aria-pressed" | "disabled"> {
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isActive?: boolean
  isDisabled?: boolean
  isFullWidth?: boolean
  isIconOnly?: boolean
  isLoading?: boolean
  isRounded?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>

type ButtonUnionProps = ButtonIconProps | ButtonProps

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>

export function Button(props: ButtonUnionProps): JSX.Element {
  const {
    children = "",
    className: customClassName = "",
    iconEnd = "",
    iconStart = "",
    isActive = false,
    isDisabled = false,
    isFullWidth = false,
    isIconOnly = false,
    isLoading = false,
    isRounded = false,
    size = 40,
    type = "button",
    variant = "primary",
    ...rest
  } = props

  const combinedClassName = buttonVariants({
    className: customClassName,
    isFullWidth,
    isIconOnly,
    isRounded,
    size,
    variant,
  })

  return (
    <button
      aria-pressed={isActive}
      className={combinedClassName}
      disabled={isDisabled || isLoading}
      type={type}
      {...rest}
    >
      {isLoading && <ButtonSpinner />}
      {!isLoading && iconStart}
      {isIconOnly ? isLoading ? undefined : children : <span>{children}</span>}
      {!isLoading && iconEnd}
    </button>
  )
}

export const buttonVariants = cva(styles.button, {
  defaultVariants: {
    isFullWidth: false,
    isIconOnly: false,
    isRounded: false,
    size: 40,
    variant: "primary",
  },
  variants: {
    isFullWidth: {
      false: styles.button__width_base,
      true: styles.button__width_full,
    },
    isIconOnly: {
      false: "",
      true: styles.button__icon_only,
    },
    isRounded: {
      false: styles.button__rounded_base,
      true: styles.button__rounded_full,
    },
    size: {
      32: styles.button__size_32,
      36: styles.button__size_36,
      40: styles.button__size_40,
      44: styles.button__size_44,
      48: styles.button__size_48,
    },
    variant: {
      ghost: styles.button__variant_ghost,
      primary: styles.button__variant_primary,
      secondary: styles.button__variant_secondary,
    },
  },
})
