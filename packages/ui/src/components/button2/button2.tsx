// oxlint-disable react/button-has-type better-tailwindcss/no-unknown-classes

import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { button2StylesBy, button2Styles } from "./button2.stylex"

interface Button2Props extends Omit<ComponentProps<"button">, "children"> {
  fullWidth?: boolean
  label?: string
  rounded?: boolean
  size?: 32 | 36 | 40 | 44 | 48
  variant?: "ghost" | "primary" | "secondary"
}

export function Button2(props: Button2Props): JSX.Element {
  const {
    className = "",
    size = 40,
    variant = "primary",
    label = "",
    fullWidth = false,
    rounded = false,
    ...rest
  } = props

  const combinedClassName = cn(
    button2Styles.base,
    button2StylesBy.rounded[rounded ? "full" : "base"][size],
    button2StylesBy.size[size],
    button2StylesBy.variant[variant],
    button2StylesBy.width[fullWidth ? "full" : "base"],
    className,
  )

  return (
    <button className={combinedClassName} {...rest}>
      {label}
    </button>
  )
}
