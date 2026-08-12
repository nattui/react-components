import * as stylex from "@stylexjs/stylex"
import {
  createElement,
  type ComponentProps,
  type CSSProperties,
  type ElementType,
  type JSX,
} from "react"
import { cn } from "../cn"
import { rowStyles } from "./row.stylex"

export { rowStyles } from "./row.stylex"

export type RowProps<ComponentType extends ElementType = "div"> = ComponentProps<ComponentType> &
  RowInternalProps

interface RowInternalProps {
  alignItems?: CSSProperties["alignItems"]
  as?: keyof JSX.IntrinsicElements
  flexWrap?: CSSProperties["flexWrap"]
  gap?: CSSProperties["gap"]
  gapX?: CSSProperties["columnGap"]
  gapY?: CSSProperties["rowGap"]
  justifyContent?: CSSProperties["justifyContent"]
}

export function Row(props: RowProps): JSX.Element {
  const {
    alignItems = undefined,
    as = "div",
    className = "",
    flexWrap = undefined,
    gap = undefined,
    gapX = undefined,
    gapY = undefined,
    justifyContent = undefined,
    style: customStyle,
    ...rest
  } = props

  const { className: stylexClassName } = stylex.props(rowStyles.base)

  const combinedStyle = {
    ...customStyle,
    ...(gap === undefined ? {} : { gap }),
    ...(gapX === undefined ? {} : { columnGap: gapX }),
    ...(gapY === undefined ? {} : { rowGap: gapY }),
    ...(flexWrap === undefined ? {} : { flexWrap }),
    ...(alignItems === undefined ? {} : { alignItems }),
    ...(justifyContent === undefined ? {} : { justifyContent }),
  }

  return createElement(as, {
    className: cn(stylexClassName, className),
    "data-slot": "row",
    style: combinedStyle,
    ...rest,
  })
}
