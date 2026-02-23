import { createElement, type ComponentProps, type CSSProperties, type JSX } from "react"
import styles from "@/column.module.css"

export interface ColumnProps extends ComponentProps<"div"> {
  as?: keyof JSX.IntrinsicElements
  gap?: CSSProperties["gap"]
  gapX?: CSSProperties["columnGap"]
  gapY?: CSSProperties["rowGap"]
}

export function Column(props: ColumnProps): JSX.Element {
  const {
    as = "div",
    className: customClassName = "",
    gap = undefined,
    gapX = undefined,
    gapY = undefined,
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
