// oxlint-disable jsx-a11y/no-autofocus

import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, JSX } from "react"
import styles from "./input.module.css"

export interface InputProps extends Omit<
  ComponentProps<"input">,
  "aria-pressed" | "autoFocus" | "disabled" | "readOnly" | "required"
> {
  isActive?: boolean
  isAutoFocus?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isRounded?: boolean
  isValid?: boolean
  size?: InputSize
}

type InputSize = NonNullable<VariantProps<typeof inputVariants>["size"]>

export function Input(props: InputProps): JSX.Element {
  const {
    className: customClassName = "",
    isActive = false,
    isAutoFocus = false,
    isDisabled = false,
    isInvalid = undefined,
    isReadOnly = false,
    isRequired = false,
    isRounded = false,
    isValid = undefined,
    size = 48,
    type = "text",
    ...rest
  } = props

  const combinedClassName = inputVariants({
    className: customClassName,
    isRounded,
    size,
  })

  return (
    <input
      autoFocus={isAutoFocus}
      className={combinedClassName}
      data-is-active={isActive}
      data-is-invalid={isInvalid}
      data-is-valid={isValid}
      data-slot="input"
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      type={type}
      {...rest}
    />
  )
}

export const inputVariants = cva(styles.base, {
  defaultVariants: {
    isRounded: false,
    size: 48,
  },
  variants: {
    isRounded: {
      false: styles.rounded_base,
      true: styles.rounded_full,
    },
    size: {
      32: styles.size_32,
      36: styles.size_36,
      40: styles.size_40,
      44: styles.size_44,
      48: styles.size_48,
    },
  },
})
