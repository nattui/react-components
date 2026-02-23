import type { ComponentProps, CSSProperties, JSX } from "react"
import styles from "@/column.module.css"

export interface ColumnProps extends ComponentProps<"div"> {
  gap?: CSSProperties["gap"]
}

export function Column(props: ColumnProps): JSX.Element {
  const { className: customClassName = "", gap, style: customStyle, ...rest } = props

  const combinedClassName = `
    ${COLUMN_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  const combinedStyle = {
    ...customStyle,
    ...(gap === undefined ? {} : { gap }),
  }

  return <div {...rest} className={combinedClassName} style={combinedStyle} />
}

export const COLUMN_CLASS_NAME = {
  BASE: styles.column,
} as const
