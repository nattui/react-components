import { OTPField as OTPFieldBase } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./otp-field.module.css"

interface OTPFieldProps extends Omit<OTPFieldBase.Root.Props, "disabled"> {
  isDisabled?: OTPFieldBase.Root.Props["disabled"]
  isMasked?: OTPFieldBase.Root.Props["mask"]
}

export function OTPField(props: OTPFieldProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, isMasked = false, ...rest } = props

  const combinedClassName = otpFieldVariants({
    className: customClassName,
    isMasked,
  })

  return (
    <OTPFieldBase.Root
      className={combinedClassName}
      data-slot="otp-field"
      disabled={isDisabled}
      mask={isMasked}
      {...rest}
    />
  )
}

export const otpFieldVariants = cva(styles.otp_field, {
  defaultVariants: {
    isMasked: false,
  },
  variants: {
    isMasked: {
      false: "",
      true: styles.otp_field__masked,
    },
  },
})
