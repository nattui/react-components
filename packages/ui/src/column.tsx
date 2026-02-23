import { createElement, type ComponentProps, type CSSProperties, type JSX } from "react"
import styles from "@/column.module.css"

export interface ColumnProps extends ComponentProps<"div"> {
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
    className: customClassName = "",
    flexWrap = undefined,
    gap = undefined,
    gapX = undefined,
    gapY = undefined,
    justifyContent = undefined,
    style: customStyle,
    ...rest
  } = props

  const Component = as

  const combinedClassName = `
    ${COLUMN_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  const combinedStyle = {
    ...customStyle,
    ...(gap === undefined ? {} : { gap }),
    ...(gapX === undefined ? {} : { columnGap: gapX }),
    ...(gapY === undefined ? {} : { rowGap: gapY }),
    ...(flexWrap === undefined ? {} : { flexWrap }),
    ...(alignItems === undefined ? {} : { alignItems }),
    ...(justifyContent === undefined ? {} : { justifyContent }),
  }

  return createElement(Component, {
    ...rest,
    className: combinedClassName,
    style: combinedStyle,
  })
}

export const COLUMN_CLASS_NAME = {
  BASE: styles.column,
} as const
