import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { DialogResponsiveBackdrop } from "./dialog-responsive-backdrop"
import { DialogResponsiveBar } from "./dialog-responsive-bar"
import { dialogResponsivePopupStyles } from "./dialog-responsive-popup.stylex"
import { DialogResponsivePortal } from "./dialog-responsive-portal"
import { DialogResponsiveViewport } from "./dialog-responsive-viewport"

export interface DialogResponsivePopupProps extends BaseDrawer.Popup.Props {}

export function DialogResponsivePopup(props: DialogResponsivePopupProps): JSX.Element {
  const { children, className = "", ...rest } = props

  const combinedClassName = cn(dialogResponsivePopupStyles.base, className)

  return (
    <DialogResponsivePortal>
      <DialogResponsiveBackdrop />
      <DialogResponsiveViewport>
        <BaseDrawer.Popup
          className={combinedClassName}
          data-component="dialog-responsive-popup"
          {...rest}
        >
          <DialogResponsiveBar />
          {children}
        </BaseDrawer.Popup>
      </DialogResponsiveViewport>
    </DialogResponsivePortal>
  )
}
