import type { ComponentProps, JSX } from "react"
import styles from "@/row.module.css"

export interface RowProps extends ComponentProps<"div"> {}

export function Row(props: RowProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${ROW_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <div {...rest} className={combinedClassName} />
}

export const ROW_CLASS_NAME = {
  BASE: styles.row,
} as const
