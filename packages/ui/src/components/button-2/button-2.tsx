// oxlint-disable react/button-has-type

import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, JSX } from "react"
import styles from "./button-2.module.css"

interface Button2Props extends Omit<ComponentProps<"button">, "disabled"> {
  children?: number | number[] | string | string[]
  isDisabled?: ComponentProps<"button">["disabled"]
  isRounded?: VariantProps<typeof button2>["isRounded"]
  size?: VariantProps<typeof button2>["size"]
}

export function Button2(props: Button2Props): JSX.Element {
  const {
    children = "",
    className = "",
    isDisabled = false,
    isRounded = false,
    type = "button",
    size = 40,
    ...rest
  } = props

  return (
    <button
      className={button2({ className, isRounded, size })}
      disabled={isDisabled}
      type={type}
      {...rest}
    >
      <span>{children}</span>
    </button>
  )
}

const button2 = cva(styles.base, {
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
