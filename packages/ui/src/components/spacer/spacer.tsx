import * as stylex from "@stylexjs/stylex"
import type { ComponentProps, CSSProperties, JSX } from "react"
import { cn } from "../cn"
import { spacerStyles } from "./spacer.stylex"

export { spacerStyles } from "./spacer.stylex"

export interface SpacerProps extends Omit<ComponentProps<"div">, "children"> {
  height?: CSSProperties["height"]
  width?: CSSProperties["width"]
}

export function Spacer(props: SpacerProps): JSX.Element {
  const { className = "", height, style: customStyle, width, ...rest } = props
  const { className: stylexClassName } = stylex.props(spacerStyles.base)

  const combinedStyle = {
    ...customStyle,
    ...(width === undefined ? {} : { width }),
    ...(height === undefined ? {} : { height }),
  }

  return (
    <div
      className={cn(stylexClassName, className)}
      data-slot="spacer"
      style={combinedStyle}
      {...rest}
    />
  )
}
