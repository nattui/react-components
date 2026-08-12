import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { labelStyles } from "./label.stylex"

export interface LabelProps extends ComponentProps<"label"> {}

export function Label(props: LabelProps): JSX.Element {
  const { className = "", htmlFor = undefined, children = undefined, ...rest } = props

  const combinedClassName = cn(labelStyles.base, className)

  return (
    <label className={combinedClassName} data-component="label" htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  )
}
