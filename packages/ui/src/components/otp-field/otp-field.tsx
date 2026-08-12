import { OTPField as OTPFieldBase } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { otpFieldStyles } from "./otp-field.stylex"

export { otpFieldStyles } from "./otp-field.stylex"

interface OTPFieldProps extends Omit<OTPFieldBase.Root.Props, "mask"> {
  masked?: OTPFieldBase.Root.Props["mask"]
}

export function OTPField(props: OTPFieldProps): JSX.Element {
  const { className: customClassName = "", masked = false, ...rest } = props

  return (
    <OTPFieldBase.Root
      className={cn(sx(otpFieldStyles.base), customClassName)}
      data-is-masked={masked}
      data-slot="otp-field"
      mask={masked}
      {...rest}
    />
  )
}
