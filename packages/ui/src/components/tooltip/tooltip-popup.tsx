import { Tooltip as BaseTooltip } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import styles from "./tooltip-popup.module.css"

export interface TooltipPopupProps
  extends Pick<BaseTooltip.Positioner.Props, "side" | "sideOffset">, BaseTooltip.Popup.Props {}

export function TooltipPopup(props: TooltipPopupProps): JSX.Element {
  const {
    children = "",
    className: customClassName = "",
    side = "top",
    sideOffset = 4,
    ...rest
  } = props

  const combinedClassName = normalizeWhitespace(`
    ${TOOLTIP_POPUP_CLASS_NAME.BASE}
    ${customClassName}
  `)

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

export const TOOLTIP_POPUP_CLASS_NAME = {
  BASE: styles.tooltip_popup,
} as const
