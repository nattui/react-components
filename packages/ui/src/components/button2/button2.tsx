// oxlint-disable react/button-has-type better-tailwindcss/no-unknown-classes

import type { ComponentProps, JSX, ReactNode } from "react"
import { ButtonSpinner } from "../button/button-spinner"
import { cn } from "../cn"
import { button2StylesBy, button2Styles } from "./button2.stylex"

interface Button2Props extends Omit<ComponentProps<"button">, "children"> {
  fullWidth?: boolean
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: string
  loading?: boolean
  rounded?: boolean
  size?: 32 | 36 | 40 | 44 | 48
  variant?: "ghost" | "primary" | "secondary"
}

export function Button2(props: Button2Props): JSX.Element {
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
    button2Styles.base,
    button2StylesBy.rounded[rounded ? "full" : "base"][size],
    button2StylesBy.size[size],
    button2StylesBy.variant[variant],
    button2StylesBy.width[fullWidth ? "full" : "base"],
    (disabled || loading) && button2Styles.disabled,
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
