import {
  createElement,
  type ComponentProps,
  type CSSProperties,
  type ElementType,
  type JSX,
} from "react"
import { cn } from "../cn"
import { columnStyles } from "./column.stylex"

export type ColumnProps<ComponentType extends ElementType = "div"> = ColumnInternalProps &
  ComponentProps<ComponentType>

interface ColumnInternalProps {
  alignItems?: CSSProperties["alignItems"]
  as?: keyof JSX.IntrinsicElements
  flexWrap?: CSSProperties["flexWrap"]
  gap?: CSSProperties["gap"]
  gapX?: CSSProperties["columnGap"]
  gapY?: CSSProperties["rowGap"]
  justifyContent?: CSSProperties["justifyContent"]
}

export function Column(props: ColumnProps): JSX.Element {
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

  const combinedClassName = cn(columnStyles.base, className)

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
    className: combinedClassName,
    "data-component": "column",
    style: combinedStyle,
    ...rest,
  })
}
