import { Tooltip as BaseTooltip } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { tooltipPopupStyles } from "./tooltip-popup.stylex"

export { tooltipPopupStyles } from "./tooltip-popup.stylex"

export interface TooltipPopupProps
  extends Pick<BaseTooltip.Positioner.Props, "side" | "sideOffset">, BaseTooltip.Popup.Props {}

export function TooltipPopup(props: TooltipPopupProps): JSX.Element {
  const {
    children = undefined,
    className: customClassName = "",
    side = "top",
    sideOffset = 4,
    ...rest
  } = props

  return (
    <BaseTooltip.Portal className={sx(tooltipPopupStyles.portal)}>
      <BaseTooltip.Positioner
        className={sx(tooltipPopupStyles.positioner)}
        side={side}
        sideOffset={sideOffset}
      >
        <BaseTooltip.Popup
          className={cn(sx(tooltipPopupStyles.base), customClassName)}
          data-slot="tooltip-popup"
          {...rest}
        >
          {children}
        </BaseTooltip.Popup>
        <BaseTooltip.Arrow />
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  )
}
