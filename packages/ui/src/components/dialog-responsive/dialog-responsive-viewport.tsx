import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { dialogResponsiveViewportStyles } from "./dialog-responsive-viewport.stylex"

export interface DialogResponsiveViewportProps extends BaseDrawer.Viewport.Props {}

export function DialogResponsiveViewport(props: DialogResponsiveViewportProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(dialogResponsiveViewportStyles.base, className)

  return (
    <BaseDrawer.Viewport
      className={combinedClassName}
      data-component="dialog-responsive-viewport"
      {...rest}
    />
  )
}
