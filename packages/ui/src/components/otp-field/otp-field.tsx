import { OTPField as OTPFieldBase } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { otpFieldStyles } from "./otp-field.stylex"

export { otpFieldStyles } from "./otp-field.stylex"

interface OTPFieldProps extends Omit<OTPFieldBase.Root.Props, "disabled"> {
  isDisabled?: OTPFieldBase.Root.Props["disabled"]
  isMasked?: OTPFieldBase.Root.Props["mask"]
}

export function OTPField(props: OTPFieldProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, isMasked = false, ...rest } = props

  return (
    <OTPFieldBase.Root
      className={cn(sx(otpFieldStyles.base), customClassName)}
      data-is-masked={isMasked}
      data-slot="otp-field"
      disabled={isDisabled}
      mask={isMasked}
      {...rest}
    />
  )
}
