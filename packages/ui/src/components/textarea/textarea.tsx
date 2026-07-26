import { cva } from "class-variance-authority"
import type { ComponentProps, JSX } from "react"
import inputStyles from "../input/input.module.css"
import styles from "./textarea.module.css"

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

  const combinedClassName = textareaVariants({
    className: customClassName,
    isRounded,
  })

  return (
    <textarea
      className={combinedClassName}
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

export const textareaVariants = cva([inputStyles.base, styles.base], {
  defaultVariants: {
    isRounded: false,
  },
  variants: {
    isRounded: {
      false: inputStyles.rounded_base,
      true: inputStyles.rounded_full,
    },
  },
})
