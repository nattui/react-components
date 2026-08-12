import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { dialogResponsivePortalStyles } from "./dialog-responsive-portal.stylex"

export { dialogResponsivePortalStyles } from "./dialog-responsive-portal.stylex"

export interface DialogResponsivePortalProps extends BaseDrawer.Portal.Props {}

export function DialogResponsivePortal(props: DialogResponsivePortalProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseDrawer.Portal
      className={cn(sx(dialogResponsivePortalStyles.base), customClassName)}
      data-slot="dialog-responsive-portal"
      {...rest}
    />
  )
}
