import type { ComponentProps, JSX } from "react"
import { cn, sx } from "../cn"
import { dialogResponsiveBarStyles } from "./dialog-responsive-bar.stylex"

export { dialogResponsiveBarStyles } from "./dialog-responsive-bar.stylex"

export interface DialogResponsiveBarProps extends ComponentProps<"div"> {}

export function DialogResponsiveBar(props: DialogResponsiveBarProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <div
      className={cn(sx(dialogResponsiveBarStyles.base), customClassName)}
      data-slot="dialog-responsive-bar"
      {...rest}
    />
  )
}
