import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { getMenuClassName } from "./menu-utils"

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
  keepMounted?: BaseMenu.Portal.Props["keepMounted"]
}

export function MenuContent(props: MenuContentProps): JSX.Element {
  const {
    align = "start",
    alignOffset = undefined,
    anchor = undefined,
    arrowPadding = undefined,
    children,
    className: customClassName = "",
    collisionAvoidance = undefined,
    collisionBoundary = undefined,
    collisionPadding = undefined,
    container = undefined,
    disableAnchorTracking = undefined,
    keepMounted = undefined,
    positionMethod = undefined,
    side = "bottom",
    sideOffset = 8,
    sticky = undefined,
    ...rest
  } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.CONTENT, customClassName)

  return (
    <BaseMenu.Portal container={container} data-slot="menu-portal" keepMounted={keepMounted}>
      <BaseMenu.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        arrowPadding={arrowPadding}
        className={MENU_CLASS_NAME.CONTENT_POSITIONER}
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
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  )
}
