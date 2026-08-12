import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { dialogResponsiveViewportStyles } from "./dialog-responsive-viewport.stylex"

export { dialogResponsiveViewportStyles } from "./dialog-responsive-viewport.stylex"

export interface DialogResponsiveViewportProps extends BaseDrawer.Viewport.Props {}

export function DialogResponsiveViewport(props: DialogResponsiveViewportProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseDrawer.Viewport
      className={cn(dialogResponsiveViewportStyles.base, customClassName)}
      data-slot="dialog-responsive-viewport"
      {...rest}
    />
  )
}
