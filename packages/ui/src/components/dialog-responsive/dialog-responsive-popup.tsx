import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { DialogResponsiveBackdrop } from "./dialog-responsive-backdrop"
import { DialogResponsiveBar } from "./dialog-responsive-bar"
import { dialogResponsivePopupStyles } from "./dialog-responsive-popup.stylex"
import { DialogResponsivePortal } from "./dialog-responsive-portal"
import { DialogResponsiveViewport } from "./dialog-responsive-viewport"

export { dialogResponsivePopupStyles } from "./dialog-responsive-popup.stylex"

export interface DialogResponsivePopupProps extends BaseDrawer.Popup.Props {}

export function DialogResponsivePopup(props: DialogResponsivePopupProps): JSX.Element {
  const { children, className: customClassName = "", ...rest } = props

  return (
    <DialogResponsivePortal>
      <DialogResponsiveBackdrop />
      <DialogResponsiveViewport>
        <BaseDrawer.Popup
          className={cn(sx(dialogResponsivePopupStyles.base), customClassName)}
          data-slot="dialog-responsive-popup"
          {...rest}
        >
          <DialogResponsiveBar />
          {children}
        </BaseDrawer.Popup>
      </DialogResponsiveViewport>
    </DialogResponsivePortal>
  )
}
