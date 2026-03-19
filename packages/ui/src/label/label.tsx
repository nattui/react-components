import type { ComponentProps, JSX } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/label/label.module.css"

export interface LabelProps extends ComponentProps<"label"> {}

export function Label(props: LabelProps): JSX.Element {
  const { className: customClassName = "", htmlFor = undefined, children = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${LABEL_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <label className={combinedClassName} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  )
}

export const LABEL_CLASS_NAME = {
  BASE: styles.label,
} as const
