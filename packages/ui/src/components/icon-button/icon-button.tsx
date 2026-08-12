import type { JSX, ReactNode } from "react"
import { getButtonClassName, type ButtonProps } from "../button/button"
import { ButtonSpinner } from "../button/button-spinner"
import { buttonStyles } from "../button/button.stylex"
import { sx } from "../cn"
import { iconButtonStyles } from "./icon-button.stylex"

export { iconButtonStyles } from "./icon-button.stylex"

export interface IconButtonProps extends Omit<
  ButtonProps,
  "iconEnd" | "iconStart" | "isFullWidth" | "label"
> {
  icon?: ReactNode
}

export function IconButton(props: IconButtonProps): JSX.Element {
  const {
    className = "",
    icon = "",
    isDisabled = false,
    isLoading = false,
    isRounded = false,
    variant = "primary",
    size = 40,
    ...rest
  } = props

  return (
    <button
      className={getButtonClassName(
        {
          className,
          isDisabled,
          isLoading,
          isRounded,
          size,
          variant,
        },
        iconButtonStyles[size],
      )}
      data-slot="icon-button"
      disabled={isDisabled || isLoading}
      type="button"
      {...rest}
    >
      {isLoading && <ButtonSpinner />}
      {isLoading ? <span className={sx(buttonStyles.loadingContent)}>{icon}</span> : icon}
    </button>
  )
}
