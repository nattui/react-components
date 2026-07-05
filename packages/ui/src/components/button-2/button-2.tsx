// oxlint-disable react/button-has-type

import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, JSX, ReactNode } from "react"
import { ButtonSpinner } from "../button/button-spinner"
import styles from "./button-2.module.css"

export interface Button2Props extends Omit<ComponentProps<"button">, "disabled"> {
  children?: number | number[] | string | string[]
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isDisabled?: ComponentProps<"button">["disabled"]
  isFullWidth?: VariantProps<typeof button2>["isFullWidth"]
  isLoading?: ComponentProps<"button">["disabled"]
  isRounded?: VariantProps<typeof button2>["isRounded"]
  size?: VariantProps<typeof button2>["size"]
  variant?: VariantProps<typeof button2>["variant"]
}

export function Button2(props: Button2Props): JSX.Element {
  const {
    children = "",
    className = "",
    isDisabled = false,
    iconStart = "",
    iconEnd = "",
    isFullWidth = false,
    isLoading = false,
    isRounded = false,
    type = "button",
    variant = "primary",
    size = 40,
    ...rest
  } = props

  return (
    <button
      className={button2({
        className,
        isDisabled,
        isFullWidth,
        isLoading,
        isRounded,
        size,
        variant,
      })}
      disabled={isDisabled || isLoading}
      type={type}
      {...rest}
    >
      {isLoading && <ButtonSpinner />}
      {iconStart}
      <span>{children}</span>
      {iconEnd}
    </button>
  )
}

export const button2 = cva(styles.base, {
  variants: {
    isDisabled: {
      true: styles.disabled,
    },
    isFullWidth: {
      false: styles.width_base,
      true: styles.width_full,
    },
    isLoading: {
      true: styles.loading,
    },
    isRounded: {
      false: styles.rounded_base,
      true: styles.rounded_full,
    },
    size: {
      32: styles.size_32,
      36: styles.size_36,
      40: styles.size_40,
      44: styles.size_44,
      48: styles.size_48,
    },
    variant: {
      ghost: styles.variant_ghost,
      primary: styles.variant_primary,
      secondary: styles.variant_secondary,
    },
  },
})
