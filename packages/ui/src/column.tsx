import type { ComponentProps, JSX } from "react"
import styles from "@/column.module.css"

export interface ColumnProps extends ComponentProps<"div"> {}

export function Column(props: ColumnProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${COLUMN_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <div {...rest} className={combinedClassName} />
}

export const COLUMN_CLASS_NAME = {
  BASE: styles.column,
} as const
