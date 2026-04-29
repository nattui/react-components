import { Tooltip as BaseTooltip } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import styles from "./tooltip-content.module.css"

export interface TooltipContentProps
  extends Pick<BaseTooltip.Positioner.Props, "side" | "sideOffset">, BaseTooltip.Popup.Props {}

export function TooltipContent(props: TooltipContentProps): JSX.Element {
  const DEFAULT_SIDE_OFFSET = 4

  const {
    children,
    className: customClassName = "",
    side = "top",
    sideOffset = DEFAULT_SIDE_OFFSET,
    ...rest
  } = props

  const combinedClassName = normalizeWhitespace(`
    ${TOOLTIP_CONTENT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner
        className={styles.tooltip_content_positioner}
        side={side}
        sideOffset={sideOffset}
      >
        <BaseTooltip.Popup className={combinedClassName} data-slot="tooltip-content" {...rest}>
          {children}
        </BaseTooltip.Popup>
        <BaseTooltip.Arrow />
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  )
}

export const TOOLTIP_CONTENT_CLASS_NAME = {
  BASE: styles.tooltip_content,
} as const
