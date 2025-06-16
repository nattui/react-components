import { type ComponentProps } from "react"
import styles from "./button.module.css"

export interface ButtonProperties extends ComponentProps<"button"> {}

export function Button(properties: ButtonProperties) {
  const { className = "", ...rest } = properties

  return <button className={`${styles.button} ${className}`.trim()} {...rest} />
}
