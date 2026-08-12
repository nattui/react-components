import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { dialogResponsivePortalStyles } from "./dialog-responsive-portal.stylex"

export interface DialogResponsivePortalProps extends BaseDrawer.Portal.Props {}

export function DialogResponsivePortal(props: DialogResponsivePortalProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(dialogResponsivePortalStyles.base, className)

  return (
    <BaseDrawer.Portal
      className={combinedClassName}
      data-component="dialog-responsive-portal"
      {...rest}
    />
  )
}
