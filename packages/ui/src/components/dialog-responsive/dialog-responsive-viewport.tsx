import { Drawer as BaseDrawer } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./dialog-responsive-viewport.module.css"

export interface DialogResponsiveViewportProps extends BaseDrawer.Viewport.Props {}

export function DialogResponsiveViewport(props: DialogResponsiveViewportProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = dialogResponsiveViewportVariants({ className: customClassName })

  return (
    <BaseDrawer.Viewport
      className={combinedClassName}
      data-slot="dialog-responsive-viewport"
      {...rest}
    />
  )
}

export const dialogResponsiveViewportVariants = cva(styles.dialog_responsive_viewport)
