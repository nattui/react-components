import { OTPField as OTPFieldBase } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { otpFieldStyles } from "./otp-field.stylex"

export interface OTPFieldProps extends Omit<OTPFieldBase.Root.Props, "mask"> {
  masked?: OTPFieldBase.Root.Props["mask"]
}

export function OTPField(props: OTPFieldProps): JSX.Element {
  const { className = "", masked = false, ...rest } = props

  const combinedClassName = cn(otpFieldStyles.base, className)

  return (
    <OTPFieldBase.Root
      className={combinedClassName}
      data-component="otp-field"
      data-is-masked={masked}
      mask={masked}
      {...rest}
    />
  )
}
