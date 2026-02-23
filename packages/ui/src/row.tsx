import type { ComponentProps, CSSProperties, JSX } from "react"
import styles from "@/row.module.css"

export interface RowProps extends ComponentProps<"div"> {
  gap?: CSSProperties["gap"]
}

export function Row(props: RowProps): JSX.Element {
  const { className: customClassName = "", gap, style: customStyle, ...rest } = props

  const combinedClassName = `
    ${ROW_CLASS_NAME.BASE}
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

export const ROW_CLASS_NAME = {
  BASE: styles.row,
} as const
