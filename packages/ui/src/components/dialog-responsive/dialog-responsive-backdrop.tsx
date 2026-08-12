import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { dialogResponsiveBackdropStyles } from "./dialog-responsive-backdrop.stylex"

export { dialogResponsiveBackdropStyles } from "./dialog-responsive-backdrop.stylex"

export interface DialogResponsiveBackdropProps extends BaseDrawer.Backdrop.Props {}

export function DialogResponsiveBackdrop(props: DialogResponsiveBackdropProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseDrawer.Backdrop
      className={cn(dialogResponsiveBackdropStyles.base, customClassName)}
      data-slot="dialog-responsive-backdrop"
      {...rest}
    />
  )
}
