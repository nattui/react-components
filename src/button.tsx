import { type ComponentProps } from "react"
import styles from "./button.module.css"

export interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  const { className = "", ...rest } = props

  return <button className={`${styles.button} ${className}`.trim()} {...rest} />
}
