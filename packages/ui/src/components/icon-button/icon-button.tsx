import type { JSX, ReactNode } from "react"
import { getButtonClassName, type ButtonProps } from "../button/button"
import { ButtonSpinner } from "../button/button-spinner"
import { buttonStyles } from "../button/button.stylex"
import { sx } from "../cn"
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

  return (
    <button
      className={getButtonClassName(
        {
          className,
          disabled,
          loading,
          rounded,
          size,
          variant,
        },
        iconButtonStyles[size],
      )}
      data-slot="icon-button"
      disabled={disabled || loading}
      type="button"
      {...rest}
    >
      {loading && <ButtonSpinner />}
      {loading ? <span className={sx(buttonStyles.loadingContent)}>{icon}</span> : icon}
    </button>
  )
}
