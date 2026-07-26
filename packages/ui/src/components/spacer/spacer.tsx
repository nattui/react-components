import { cva } from "class-variance-authority"
import type { ComponentProps, CSSProperties, JSX } from "react"
import styles from "./spacer.module.css"

export interface SpacerProps extends Omit<ComponentProps<"div">, "children"> {
  height?: CSSProperties["height"]
  width?: CSSProperties["width"]
}

export function Spacer(props: SpacerProps): JSX.Element {
  const { className: customClassName = "", height, style: customStyle, width, ...rest } = props

  const combinedClassName = spacerVariants({ className: customClassName })

  const combinedStyle = {
    ...customStyle,
    ...(width === undefined ? {} : { width }),
    ...(height === undefined ? {} : { height }),
  }

  return <div className={combinedClassName} data-slot="spacer" style={combinedStyle} {...rest} />
}

export const spacerVariants = cva(styles.base)
