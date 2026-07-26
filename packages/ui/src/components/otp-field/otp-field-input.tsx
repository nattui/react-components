import { OTPField as OTPFieldBase } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./otp-field-input.module.css"

interface OTPFieldInputProps extends OTPFieldBase.Input.Props {}

export function OTPFieldInput(props: OTPFieldInputProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = otpFieldInputVariants({ className: customClassName })

  return <OTPFieldBase.Input className={combinedClassName} data-slot="otp-field-input" {...rest} />
}

export const otpFieldInputVariants = cva(styles.otp_field_input)
