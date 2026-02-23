import type { ComponentProps, CSSProperties } from "react"
import styles from "@/spacer.module.css"

export interface SpacerProps extends Omit<ComponentProps<"div">, "children"> {
  height?: CSSProperties["height"]
  width?: CSSProperties["width"]
}

export function Spacer(props: SpacerProps) {
  const { className: customClassName = "", height, style: customStyle, width, ...rest } = props

  const combinedClassName = `
    ${SPACER_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  const combinedStyle = {
    ...customStyle,
    ...(width === undefined ? {} : { width }),
    ...(height === undefined ? {} : { height }),
  }

  return <div {...rest} className={combinedClassName} style={combinedStyle} />
}

export const SPACER_CLASS_NAME = {
  BASE: styles.spacer,
} as const
