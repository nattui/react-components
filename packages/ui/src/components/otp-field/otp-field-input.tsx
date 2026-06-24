import { OTPField as OTPFieldBase } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import styles from "./otp-field-input.module.css"

interface OTPFieldInputProps extends OTPFieldBase.Input.Props {}

export function OTPFieldInput(props: OTPFieldInputProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${OTP_FIELD_INPUT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <OTPFieldBase.Input className={combinedClassName} {...rest} />
}

export const OTP_FIELD_INPUT_CLASS_NAME = {
  BASE: styles.otp_field_input,
} as const
