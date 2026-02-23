import { createElement, type ComponentProps, type CSSProperties, type JSX } from "react"
import styles from "@/row.module.css"

export interface RowProps extends ComponentProps<"div"> {
  as?: keyof JSX.IntrinsicElements
  gap?: CSSProperties["gap"]
  gapX?: CSSProperties["columnGap"]
  gapY?: CSSProperties["rowGap"]
}

export function Row(props: RowProps): JSX.Element {
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
    ${ROW_CLASS_NAME.BASE}
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

export const ROW_CLASS_NAME = {
  BASE: styles.row,
} as const
