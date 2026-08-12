import type { ComponentProps, JSX } from "react"
import { cn } from "../cn"
import { dialogResponsiveBarStyles } from "./dialog-responsive-bar.stylex"

export interface DialogResponsiveBarProps extends ComponentProps<"div"> {}

export function DialogResponsiveBar(props: DialogResponsiveBarProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(dialogResponsiveBarStyles.base, className)

  return <div className={combinedClassName} data-component="dialog-responsive-bar" {...rest} />
}
