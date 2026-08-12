// oxlint-disable react/button-has-type

import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { button2Styles } from "./button2.stylex"

interface Button2Props extends ComponentProps<"button"> {}

export function Button2(props: Button2Props): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(button2Styles.base, className)

  return (
    <button className={combinedClassName} {...rest}>
      Button2
    </button>
  )
}
