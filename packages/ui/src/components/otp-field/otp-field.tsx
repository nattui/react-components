import { OTPField as OTPFieldBase } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import styles from "./otp-field.module.css"

interface OTPFieldProps extends Omit<OTPFieldBase.Root.Props, "disabled"> {
  isDisabled?: OTPFieldBase.Root.Props["disabled"]
  isMasked?: OTPFieldBase.Root.Props["mask"]
}

export function OTPField(props: OTPFieldProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, isMasked = false, ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${OTP_FIELD_CLASS_NAME.BASE}
    ${isMasked ? OTP_FIELD_CLASS_NAME.MASKED : ""}
    ${customClassName}
  `)

  return (
    <OTPFieldBase.Root
      className={combinedClassName}
      disabled={isDisabled}
      mask={isMasked}
      {...rest}
    />
  )
}

export const OTP_FIELD_CLASS_NAME = {
  BASE: styles.otp_field,
  MASKED: styles.otp_field__masked,
} as const
