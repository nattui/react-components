// oxlint-disable better-tailwindcss/no-unknown-classes

import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { inputStylesBy, inputStyles } from "../input/input.stylex"
import { textareaStyles } from "./textarea.stylex"

export interface TextareaProps extends Omit<ComponentProps<"textarea">, "aria-pressed"> {
  active?: boolean
  invalid?: boolean
  rounded?: boolean
  valid?: boolean
}

export function Textarea(props: TextareaProps): JSX.Element {
  const {
    className = "",
    active = false,
    invalid = undefined,
    rounded = false,
    valid = undefined,
    ...rest
  } = props

  const combinedClassName = cn(
    inputStyles.base,
    textareaStyles.base,
    inputStylesBy.rounded[rounded ? "full" : "base"],
    className,
  )

  return (
    <textarea
      className={combinedClassName}
      data-component="textarea"
      data-is-active={active}
      data-is-invalid={invalid}
      data-is-valid={valid}
      rows={2}
      {...rest}
    />
  )
}
