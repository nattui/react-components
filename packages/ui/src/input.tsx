import type { ComponentProps, JSX } from "react"
import styles from "@/input.module.css"

export interface InputProps extends Omit<
  ComponentProps<"input">,
  "aria-pressed" | "disabled" | "readOnly" | "required"
> {
  isActive?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isRounded?: boolean
  isValid?: boolean
  size?: 32 | 36 | 40 | 44 | 48
}

export function Input(props: InputProps): JSX.Element {
  const {
    className: customClassName = "",
    isActive = false,
    isDisabled = false,
    isInvalid = undefined,
    isReadOnly = false,
    isRequired = false,
    isRounded = false,
    isValid = undefined,
    size = 40,
    type = "text",
    ...rest
  } = props

  const isPassword = type === "password"

  const combinedClassName = `
    ${INPUT_CLASS_NAME.BASE}
    ${INPUT_CLASS_NAME.SIZE[size]}
    ${isPassword ? INPUT_CLASS_NAME.PASSWORD : ""}
    ${isRounded ? INPUT_CLASS_NAME.ROUNDED.FULL : INPUT_CLASS_NAME.ROUNDED.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <input
      aria-pressed={isActive}
      className={combinedClassName}
      data-is-invalid={isInvalid}
      data-is-valid={isValid}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      type={type}
      {...rest}
    />
  )
}

export const INPUT_CLASS_NAME = {
  BASE: styles.input,
  PASSWORD: styles.input__password,
  ROUNDED: {
    BASE: styles.input__rounded_base,
    FULL: styles.input__rounded_full
  },
  SIZE: {
    32: styles.input__size_32,
    36: styles.input__size_36,
    40: styles.input__size_40,
    44: styles.input__size_44,
    48: styles.input__size_48
  }
} as const
