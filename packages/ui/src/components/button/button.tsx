// oxlint-disable react/button-has-type better-tailwindcss/no-unknown-classes

import type { ComponentProps, JSX, ReactNode } from "react"
import { ButtonSpinner } from "../button/button-spinner"
import { cn } from "../cn"
import { buttonStylesBy, buttonStyles } from "./button.stylex"

export interface ButtonProps extends Omit<ComponentProps<"button">, "children"> {
  fullWidth?: boolean
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: string
  loading?: boolean
  rounded?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}
export type ButtonSize = 32 | 36 | 40 | 44 | 48

export type ButtonVariant = "ghost" | "primary" | "secondary"

export function Button(props: ButtonProps): JSX.Element {
  const {
    className = "",
    disabled = false,
    fullWidth = false,
    iconEnd = "",
    iconStart = "",
    label = "",
    loading = false,
    rounded = false,
    size = 40,
    variant = "primary",
    ...rest
  } = props

  const combinedClassName = cn(
    buttonStyles.base,
    buttonStylesBy.rounded[rounded ? "full" : "base"][size],
    buttonStylesBy.size[size],
    buttonStylesBy.variant[variant],
    buttonStylesBy.width[fullWidth ? "full" : "base"],
    (disabled || loading) && buttonStyles.disabled,
    className,
  )

  const isDisabled = disabled || loading

  return (
    <button className={combinedClassName} disabled={isDisabled} {...rest}>
      {!loading && iconStart}
      {loading && <ButtonSpinner />}
      {label}
      {iconEnd}
    </button>
  )
}
