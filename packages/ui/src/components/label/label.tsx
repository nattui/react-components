import * as stylex from "@stylexjs/stylex"
import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { labelStyles } from "./label.stylex"

export { labelStyles } from "./label.stylex"

export interface LabelProps extends ComponentProps<"label"> {}

export function Label(props: LabelProps): JSX.Element {
  const { className = "", htmlFor = undefined, children = undefined, ...rest } = props
  const { className: stylexClassName } = stylex.props(labelStyles.base)

  return (
    <label className={cn(stylexClassName, className)} data-slot="label" htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  )
}
