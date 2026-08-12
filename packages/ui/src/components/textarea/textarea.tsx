import type { ComponentProps, JSX } from "react"
import { cn, sx } from "../cn"
import { inputStyles } from "../input/input.stylex"
import { textareaStyles } from "./textarea.stylex"

export { textareaStyles } from "./textarea.stylex"

export interface TextareaProps extends Omit<ComponentProps<"textarea">, "aria-pressed"> {
  active?: boolean
  invalid?: boolean
  rounded?: boolean
  valid?: boolean
}

export function Textarea(props: TextareaProps): JSX.Element {
  const {
    className: customClassName = "",
    active = false,
    invalid = undefined,
    rounded = false,
    valid = undefined,
    ...rest
  } = props

  return (
    <textarea
      className={cn(
        sx(
          inputStyles.base,
          textareaStyles.base,
          rounded ? inputStyles.roundedFull : inputStyles.roundedBase,
        ),
        customClassName,
      )}
      data-is-active={active}
      data-is-invalid={invalid}
      data-is-valid={valid}
      data-slot="textarea"
      rows={2}
      {...rest}
    />
  )
}
