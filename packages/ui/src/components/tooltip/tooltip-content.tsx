import { Tooltip as BaseTooltip } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/tooltip/tooltip-content.module.css"

export interface TooltipContentProps
  extends Pick<BaseTooltip.Positioner.Props, "side">, BaseTooltip.Popup.Props {}

export function TooltipContent(props: TooltipContentProps): JSX.Element {
  const { children, className: customClassName = "", side = "top", ...rest } = props

  const SIDE_OFFSET = 4

  const combinedClassName = normalizeWhitespace(`
    ${TOOLTIP_CONTENT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner
        className={styles.tooltip_content_positioner}
        side={side}
        sideOffset={SIDE_OFFSET}
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
