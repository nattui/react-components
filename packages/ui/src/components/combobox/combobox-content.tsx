import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerPopupStyles } from "../picker/picker-popup.stylex"

export interface ComboboxContentProps
  extends
    Omit<BaseCombobox.Popup.Props, "className">,
    Pick<
      BaseCombobox.Positioner.Props,
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
  container?: BaseCombobox.Portal.Props["container"]
}

export function ComboboxContent(props: ComboboxContentProps): JSX.Element {
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
    positionMethod = undefined,
    side = "bottom",
    sideOffset = 6,
    sticky = undefined,
    ...rest
  } = props

  return (
    <BaseCombobox.Portal container={container} data-slot="combobox-portal">
      <BaseCombobox.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        arrowPadding={arrowPadding}
        className={cn(pickerPopupStyles.positioner)}
        collisionAvoidance={collisionAvoidance}
        collisionBoundary={collisionBoundary}
        collisionPadding={collisionPadding}
        data-slot="combobox-positioner"
        disableAnchorTracking={disableAnchorTracking}
        positionMethod={positionMethod}
        side={side}
        sideOffset={sideOffset}
        sticky={sticky}
      >
        <BaseCombobox.Popup
          className={cn(pickerPopupStyles.base, customClassName)}
          data-slot="combobox-content"
          {...rest}
        >
          {children}
        </BaseCombobox.Popup>
      </BaseCombobox.Positioner>
    </BaseCombobox.Portal>
  )
}
