import type { ComponentProps, CSSProperties, JSX } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/spacer/spacer.module.css"

export interface SpacerProps extends Omit<ComponentProps<"div">, "children"> {
  height?: CSSProperties["height"]
  width?: CSSProperties["width"]
}

export function Spacer(props: SpacerProps): JSX.Element {
  const { className: customClassName = "", height, style: customStyle, width, ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${SPACER_CLASS_NAME.BASE}
    ${customClassName}
  `)

  const combinedStyle = {
    ...customStyle,
    ...(width === undefined ? {} : { width }),
    ...(height === undefined ? {} : { height }),
  }

  return <div className={combinedClassName} style={combinedStyle} {...rest} />
}

export const SPACER_CLASS_NAME = {
  BASE: styles.spacer,
} as const
