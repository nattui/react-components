import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, JSX, ReactNode } from "react"
import { ButtonSpinner } from "./button-spinner"
import styles from "./button.module.css"

export interface ButtonProps extends Omit<ComponentProps<"button">, "children" | "disabled"> {
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isDisabled?: ComponentProps<"button">["disabled"]
  isFullWidth?: VariantProps<typeof button>["isFullWidth"]
  isLoading?: ComponentProps<"button">["disabled"]
  isRounded?: VariantProps<typeof button>["isRounded"]
  label?: number | number[] | string | string[]
  size?: VariantProps<typeof button>["size"]
  variant?: VariantProps<typeof button>["variant"]
}

export function Button(props: ButtonProps): JSX.Element {
  const {
    className = "",
    isDisabled = false,
    iconStart = "",
    iconEnd = "",
    isFullWidth = false,
    isLoading = false,
    isRounded = false,
    label = "",
    variant = "primary",
    size = 40,
    ...rest
  } = props

  return (
    <button
      className={button({
        className,
        isDisabled,
        isFullWidth,
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
      {iconStart}
      {label !== "" && <span>{label}</span>}
      {iconEnd}
    </button>
  )
}

export const button = cva(styles.base, {
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
