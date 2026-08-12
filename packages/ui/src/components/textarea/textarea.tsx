import type { ComponentProps, JSX } from "react"
import { cn, sx } from "../cn"
import { inputStyles } from "../input/input.stylex"
import { textareaStyles } from "./textarea.stylex"

export { textareaStyles } from "./textarea.stylex"

export interface TextareaProps extends Omit<
  ComponentProps<"textarea">,
  "aria-pressed" | "disabled" | "readOnly" | "required"
> {
  isActive?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isRounded?: boolean
  isValid?: boolean
}

export function Textarea(props: TextareaProps): JSX.Element {
  const {
    className: customClassName = "",
    isActive = false,
    isDisabled = false,
    isInvalid = undefined,
    isReadOnly = false,
    isRequired = false,
    isRounded = false,
    isValid = undefined,
    rows = 2,
    ...rest
  } = props

  return (
    <textarea
      className={cn(
        sx(
          inputStyles.base,
          textareaStyles.base,
          isRounded ? inputStyles.roundedFull : inputStyles.roundedBase,
        ),
        customClassName,
      )}
      data-is-active={isActive}
      data-is-invalid={isInvalid}
      data-is-valid={isValid}
      data-slot="textarea"
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      rows={rows}
      {...rest}
    />
  )
}
