import { Tooltip as BaseTooltip } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./tooltip-popup.module.css"

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

  const combinedClassName = tooltipPopupVariants({ className: customClassName })

  return (
    <BaseTooltip.Portal className={styles.tooltip_popup_portal}>
      <BaseTooltip.Positioner side={side} sideOffset={sideOffset}>
        <BaseTooltip.Popup className={combinedClassName} data-slot="tooltip-popup" {...rest}>
          {children}
        </BaseTooltip.Popup>
        <BaseTooltip.Arrow />
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  )
}

export const tooltipPopupVariants = cva(styles.tooltip_popup)
