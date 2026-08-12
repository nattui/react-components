// oxlint-disable jsx-a11y/no-autofocus

import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { inputStylesBy, inputStyles } from "./input.stylex"

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
    className = "",
    active = false,
    invalid = undefined,
    rounded = false,
    size = 48,
    valid = undefined,
    ...rest
  } = props

  const combinedClassName = cn(
    inputStyles.base,
    inputStylesBy.size[size],
    rounded && inputStylesBy.rounded.full,
    className,
  )

  return (
    <input
      className={combinedClassName}
      data-component="input"
      data-is-active={active}
      data-is-invalid={invalid}
      data-is-valid={valid}
      type="text"
      {...rest}
    />
  )
}
