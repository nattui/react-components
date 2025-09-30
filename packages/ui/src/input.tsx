import type { ComponentProps, JSX } from "react"
import styles from "@/input.module.css"

export interface InputProps extends ComponentProps<"input"> {}

export function Input(props: InputProps): JSX.Element {
  const { className: customClassName = "" } = props

  const combinedClassName = `
    ${INPUT_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <input className={combinedClassName} {...props} />
}

export const INPUT_CLASS_NAME = {
  BASE: styles.input,
} as const
