import type { ComponentProps } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/dialog-responsive/dialog-responsive-bar.module.css"

export interface DialogResponsiveBarProps extends ComponentProps<"div"> {}

export function DialogResponsiveBar(props: DialogResponsiveBarProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DIALOG_RESPONSIVE_BAR_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <div className={combinedClassName} data-slot="dialog-responsive-bar" {...rest} />
}

export const DIALOG_RESPONSIVE_BAR_CLASS_NAME = {
  BASE: styles.dialog_responsive_bar,
} as const
