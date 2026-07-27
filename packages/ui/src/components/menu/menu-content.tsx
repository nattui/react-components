import { Menu as BaseMenu } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import listStyles from "../picker/picker-list.module.css"
import popupStyles from "../picker/picker-popup.module.css"
import styles from "./menu-content.module.css"

export interface MenuContentProps
  extends
    Omit<BaseMenu.Popup.Props, "className">,
    Pick<
      BaseMenu.Positioner.Props,
      | "align"
      | "alignOffset"
      | "anchor"
      | "arrowPadding"
      | "collisionAvoidance"
      | "collisionBoundary"
      | "collisionPadding"
      | "disableAnchorTracking"
      | "positionMethod"
      | "side"
      | "sideOffset"
      | "sticky"
    > {
  className?: string
  container?: BaseMenu.Portal.Props["container"]
}

type MenuContentSide = NonNullable<BaseMenu.Positioner.Props["side"]>

export function MenuContent(props: MenuContentProps): JSX.Element {
  const {
    align = "start",
    alignOffset = getDefaultAlignOffset,
    anchor = undefined,
    arrowPadding = undefined,
    children,
    className: customClassName = "",
    collisionAvoidance = undefined,
    collisionBoundary = undefined,
    collisionPadding = undefined,
    container = undefined,
    disableAnchorTracking = undefined,
    positionMethod = undefined,
    side = undefined,
    sideOffset = getDefaultSideOffset,
    sticky = undefined,
    ...rest
  } = props

  const combinedClassName = menuContentVariants({ className: customClassName })

  return (
    <BaseMenu.Portal container={container} data-slot="menu-portal">
      <BaseMenu.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        arrowPadding={arrowPadding}
        className={popupStyles.positioner}
        collisionAvoidance={collisionAvoidance}
        collisionBoundary={collisionBoundary}
        collisionPadding={collisionPadding}
        data-slot="menu-positioner"
        disableAnchorTracking={disableAnchorTracking}
        positionMethod={positionMethod}
        side={side}
        sideOffset={sideOffset}
        sticky={sticky}
      >
        <BaseMenu.Popup className={combinedClassName} data-slot="menu-content" {...rest}>
          <div className={listStyles.base} data-slot="menu-list">
            {children}
          </div>
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  )
}

/* When `side` is undefined, Base UI resolves it per context: "bottom"
   for a root menu and "inline-end" for a submenu. The offset defaults
   follow that resolved side: a root dropdown gets the usual 6px gap,
   while a submenu overlaps its parent by 4px (the list padding) so
   its first item lines up with the submenu trigger row. */
function getDefaultAlignOffset(data: { side: MenuContentSide }): number {
  return data.side === "bottom" || data.side === "top" ? 0 : -4
}

function getDefaultSideOffset(data: { side: MenuContentSide }): number {
  return data.side === "bottom" || data.side === "top" ? 6 : -4
}

export const menuContentVariants = cva([popupStyles.base, styles.base])
