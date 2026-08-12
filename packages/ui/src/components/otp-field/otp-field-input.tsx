import { OTPField as OTPFieldBase } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { otpFieldInputStyles } from "./otp-field-input.stylex"
import { otpFieldStyles } from "./otp-field.stylex"

export interface OTPFieldInputProps extends OTPFieldBase.Input.Props {}

export function OTPFieldInput(props: OTPFieldInputProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(otpFieldInputStyles.base, otpFieldStyles.masked_input, className)

  return (
    <OTPFieldBase.Input className={combinedClassName} data-component="otp-field-input" {...rest} />
  )
}
