import { Tooltip as BaseTooltip } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/tooltip/tooltip-content.module.css"

export interface TooltipContentProps extends BaseTooltip.Popup.Props {}

export function TooltipContent(props: TooltipContentProps) {
  const { children, className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TOOLTIP_CONTENT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner className={styles.tooltip_content_positioner}>
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
