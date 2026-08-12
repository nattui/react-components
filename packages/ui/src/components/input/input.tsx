// oxlint-disable jsx-a11y/no-autofocus

import type { ComponentProps, JSX } from "react"
import { cn, sx } from "../cn"
import { inputStyles } from "./input.stylex"

export { inputStyles } from "./input.stylex"

export interface InputProps extends Omit<
  ComponentProps<"input">,
  "aria-pressed" | "autoFocus" | "disabled" | "readOnly" | "required"
> {
  isActive?: boolean
  isAutoFocus?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isRounded?: boolean
  isValid?: boolean
  size?: InputSize
}

export type InputSize = 32 | 36 | 40 | 44 | 48

export function Input(props: InputProps): JSX.Element {
  const {
    className: customClassName = "",
    isActive = false,
    isAutoFocus = false,
    isDisabled = false,
    isInvalid = undefined,
    isReadOnly = false,
    isRequired = false,
    isRounded = false,
    isValid = undefined,
    size = 48,
    type = "text",
    ...rest
  } = props

  return (
    <input
      autoFocus={isAutoFocus}
      className={cn(
        sx(inputStyles.base, inputStyles[size], isRounded && inputStyles.roundedFull),
        customClassName,
      )}
      data-is-active={isActive}
      data-is-invalid={isInvalid}
      data-is-valid={isValid}
      data-slot="input"
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      type={type}
      {...rest}
    />
  )
}
