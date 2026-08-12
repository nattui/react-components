import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerListStyles } from "../picker/picker-list.stylex"
import { pickerPopupStyles } from "../picker/picker-popup.stylex"

export { pickerPopupStyles as selectContentStyles } from "../picker/picker-popup.stylex"

export interface SelectContentProps
  extends
    Omit<BaseSelect.Popup.Props, "className">,
    Pick<
      BaseSelect.Positioner.Props,
      | "align"
      | "alignItemWithTrigger"
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
  container?: BaseSelect.Portal.Props["container"]
}

export function SelectContent(props: SelectContentProps): JSX.Element {
  const {
    align = "start",
    alignItemWithTrigger = false,
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
    positionMethod = undefined,
    side = "bottom",
    sideOffset = 6,
    sticky = undefined,
    ...rest
  } = props

  return (
    <BaseSelect.Portal container={container} data-slot="select-portal">
      <BaseSelect.Positioner
        align={align}
        alignItemWithTrigger={alignItemWithTrigger}
        alignOffset={alignOffset}
        anchor={anchor}
        arrowPadding={arrowPadding}
        className={cn(pickerPopupStyles.positioner)}
        collisionAvoidance={collisionAvoidance}
        collisionBoundary={collisionBoundary}
        collisionPadding={collisionPadding}
        data-slot="select-positioner"
        disableAnchorTracking={disableAnchorTracking}
        positionMethod={positionMethod}
        side={side}
        sideOffset={sideOffset}
        sticky={sticky}
      >
        <BaseSelect.Popup
          className={cn(pickerPopupStyles.base, customClassName)}
          data-slot="select-content"
          {...rest}
        >
          <BaseSelect.List className={cn(pickerListStyles.base)} data-slot="select-list">
            {children}
          </BaseSelect.List>
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  )
}
