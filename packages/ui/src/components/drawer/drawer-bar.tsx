import type { ComponentProps } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/drawer/drawer-bar.module.css"

export interface DrawerBarProps extends ComponentProps<"div"> {}

export function DrawerBar(props: DrawerBarProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DRAWER_BAR_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <div className={combinedClassName} data-slot="drawer-bar" {...rest} />
}

export const DRAWER_BAR_CLASS_NAME = {
  BASE: styles.drawer_bar,
} as const
