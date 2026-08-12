// oxlint-disable better-tailwindcss/no-unknown-classes

import type { JSX, ReactNode } from "react"
import type { ButtonProps } from "../button/button"
import { ButtonSpinner } from "../button/button-spinner"
import { buttonStyles, buttonStylesBy } from "../button/button.stylex"
import { cn } from "../cn"
import { iconButtonStyles } from "./icon-button.stylex"

export { iconButtonStyles } from "./icon-button.stylex"

export interface IconButtonProps extends Omit<
  ButtonProps,
  "fullWidth" | "iconEnd" | "iconStart" | "label"
> {
  icon?: ReactNode
}

export function IconButton(props: IconButtonProps): JSX.Element {
  const {
    className = "",
    icon = "",
    disabled = false,
    loading = false,
    rounded = false,
    variant = "primary",
    size = 40,
    ...rest
  } = props

  const combinedClassName = cn(
    buttonStyles.base,
    buttonStylesBy.rounded[rounded ? "full" : "base"][size],
    buttonStylesBy.size[size],
    buttonStylesBy.variant[variant],
    buttonStylesBy.width.base,
    (disabled || loading) && buttonStyles.disabled,
    iconButtonStyles[size],
    className,
  )

  return (
    <button
      className={combinedClassName}
      data-slot="icon-button"
      disabled={disabled || loading}
      type="button"
      {...rest}
    >
      {loading && <ButtonSpinner />}
      {!loading && icon}
    </button>
  )
}
