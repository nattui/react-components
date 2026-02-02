import type { ComponentProps, JSX } from "react"
import inputStyles from "@/input.module.css"
import styles from "@/textarea.module.css"

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

  const combinedClassName = `
    ${TEXTAREA_CLASS_NAME.INPUT}
    ${TEXTAREA_CLASS_NAME.BASE}
    ${isRounded ? TEXTAREA_CLASS_NAME.ROUNDED.FULL : TEXTAREA_CLASS_NAME.ROUNDED.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <textarea
      aria-pressed={isActive}
      className={combinedClassName}
      data-is-invalid={isInvalid}
      data-is-valid={isValid}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      rows={rows}
      {...rest}
    />
  )
}

export const TEXTAREA_CLASS_NAME = {
  BASE: styles.textarea,
  INPUT: inputStyles.input,
  ROUNDED: {
    BASE: inputStyles.input__rounded_base,
    FULL: inputStyles.input__rounded_full,
  },
} as const
