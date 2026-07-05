// oxlint-disable react/button-has-type

import { cva } from "class-variance-authority"
import type { ComponentProps, JSX } from "react"
import styles from "./button-2.module.css"

interface Button2Props extends Omit<ComponentProps<"button">, "disabled"> {
  children: number | number[] | string | string[]
  isDisabled?: ComponentProps<"button">["disabled"]
}

export function Button2(props: Button2Props): JSX.Element {
  const { children, className, isDisabled = false, type = "button", ...rest } = props

  return (
    <button className={button2({ className })} disabled={isDisabled} type={type} {...rest}>
      <span>{children}</span>
    </button>
  )
}

const button2 = cva(styles.base)
