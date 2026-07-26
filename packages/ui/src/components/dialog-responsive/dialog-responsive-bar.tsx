import { cva } from "class-variance-authority"
import type { ComponentProps, JSX } from "react"
import styles from "./dialog-responsive-bar.module.css"

export interface DialogResponsiveBarProps extends ComponentProps<"div"> {}

export function DialogResponsiveBar(props: DialogResponsiveBarProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = dialogResponsiveBarVariants({ className: customClassName })

  return <div className={combinedClassName} data-slot="dialog-responsive-bar" {...rest} />
}

export const dialogResponsiveBarVariants = cva(styles.base)
