// oxlint-disable jsx-a11y/no-autofocus

import type { ComponentProps, JSX } from "react"
import { cn, sx } from "../cn"
import { inputStyles } from "./input.stylex"

export { inputStyles } from "./input.stylex"

export interface InputProps extends Omit<ComponentProps<"input">, "aria-pressed"> {
  active?: boolean
  invalid?: boolean
  rounded?: boolean
  size?: InputSize
  valid?: boolean
}

export type InputSize = 32 | 36 | 40 | 44 | 48

export function Input(props: InputProps): JSX.Element {
  const {
    className: customClassName = "",
    active = false,
    invalid = undefined,
    rounded = false,
    valid = undefined,
    size = 48,
    ...rest
  } = props

  return (
    <input
      className={cn(
        sx(inputStyles.base, inputStyles[size], rounded && inputStyles.roundedFull),
        customClassName,
      )}
      data-is-active={active}
      data-is-invalid={invalid}
      data-is-valid={valid}
      data-slot="input"
      type="text"
      {...rest}
    />
  )
}
