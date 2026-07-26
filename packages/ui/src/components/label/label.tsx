import { cva } from "class-variance-authority"
import type { ComponentProps, JSX } from "react"
import styles from "./label.module.css"

export interface LabelProps extends ComponentProps<"label"> {}

export function Label(props: LabelProps): JSX.Element {
  const {
    className: customClassName = "",
    htmlFor = undefined,
    children = undefined,
    ...rest
  } = props

  const combinedClassName = labelVariants({ className: customClassName })

  return (
    <label className={combinedClassName} data-slot="label" htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  )
}

export const labelVariants = cva(styles.base)
