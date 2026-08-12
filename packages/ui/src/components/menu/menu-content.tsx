import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerListStyles } from "../picker/picker-list.stylex"
import { pickerPopupStyles } from "../picker/picker-popup.stylex"
import { menuContentStyles } from "./menu-content.stylex"

export { menuContentStyles } from "./menu-content.stylex"

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

  return (
    <BaseMenu.Portal container={container} data-slot="menu-portal">
      <BaseMenu.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        arrowPadding={arrowPadding}
        className={sx(pickerPopupStyles.positioner)}
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
        <BaseMenu.Popup
          className={cn(sx(pickerPopupStyles.base, menuContentStyles.base), customClassName)}
          data-slot="menu-content"
          {...rest}
        >
          <div className={sx(pickerListStyles.base)} data-slot="menu-list">
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
