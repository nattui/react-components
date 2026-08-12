import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { dialogResponsiveBackdropStyles } from "./dialog-responsive-backdrop.stylex"

export interface DialogResponsiveBackdropProps extends BaseDrawer.Backdrop.Props {}

export function DialogResponsiveBackdrop(props: DialogResponsiveBackdropProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(dialogResponsiveBackdropStyles.base, className)

  return (
    <BaseDrawer.Backdrop
      className={combinedClassName}
      data-component="dialog-responsive-backdrop"
      {...rest}
    />
  )
}
