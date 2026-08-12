// oxlint-disable react/button-has-type better-tailwindcss/no-unknown-classes

import type { JSX, ReactNode } from "react"
import type { ButtonProps } from "../button/button"
import { ButtonSpinner } from "../button/button-spinner"
import { buttonStylesBy, buttonStyles } from "../button/button.stylex"
import { cn } from "../cn"
import { iconButtonStylesBy } from "./icon-button.stylex"

export interface IconButtonProps extends Omit<
  ButtonProps,
  "fullWidth" | "iconEnd" | "iconStart" | "label"
> {
  icon?: ReactNode
}

export function IconButton(props: IconButtonProps): JSX.Element {
  const {
    className = "",
    disabled = false,
    icon = "",
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
    buttonStylesBy.width.base,
    (disabled || loading) && buttonStyles.disabled,
    iconButtonStylesBy.size[size],
    className,
  )

  const isDisabled = disabled || loading

  return (
    <button
      className={combinedClassName}
      data-component="icon-button"
      disabled={isDisabled}
      {...rest}
    >
      {!loading && icon}
      {loading && <ButtonSpinner />}
    </button>
  )
}
