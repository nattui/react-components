import type { ComponentProps } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/dialog-responsive/dialog-responsive-scroll.module.css"

export interface DialogResponsiveScrollProps extends ComponentProps<"div"> {}

export function DialogResponsiveScroll(props: DialogResponsiveScrollProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DIALOG_RESPONSIVE_SCROLL_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <div className={combinedClassName} data-slot="dialog-responsive-scroll" {...rest} />
}

export const DIALOG_RESPONSIVE_SCROLL_CLASS_NAME = {
  BASE: styles.dialog_responsive_scroll,
} as const
