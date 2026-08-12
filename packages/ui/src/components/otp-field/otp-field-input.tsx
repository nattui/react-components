import { OTPField as OTPFieldBase } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { otpFieldInputStyles } from "./otp-field-input.stylex"
import { otpFieldStyles } from "./otp-field.stylex"

export { otpFieldInputStyles } from "./otp-field-input.stylex"

interface OTPFieldInputProps extends OTPFieldBase.Input.Props {}

export function OTPFieldInput(props: OTPFieldInputProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <OTPFieldBase.Input
      className={cn(sx(otpFieldInputStyles.base, otpFieldStyles.maskedInput), customClassName)}
      data-slot="otp-field-input"
      {...rest}
    />
  )
}
