// oxlint-disable react/button-has-type

import { cva } from "class-variance-authority"
import type { ComponentProps, JSX } from "react"
import styles from "./button-2.module.css"

interface Button2Props extends ComponentProps<"button"> {
  children: number | number[] | string | string[]
}

export function Button2(props: Button2Props): JSX.Element {
  const { children, className, ...rest } = props

  return (
    <button className={button2({ className })} {...rest}>
      <span>{children}</span>
    </button>
  )
}

const button2 = cva(styles.button_2)
