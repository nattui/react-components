import { Tabs as BaseTabs } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/tabs-segmented/tabs-segmented-indicator.module.css"

export interface TabsSegmentedIndicatorProps extends Omit<
  BaseTabs.Indicator.Props,
  "renderBeforeHydration"
> {
  isRenderBeforeHydration?: boolean
}

export function TabsSegmentedIndicator(props: TabsSegmentedIndicatorProps) {
  const { className: customClassName = "", isRenderBeforeHydration = true, ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_SEGMENTED_INDICATOR_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-slot="tabs-indicator"
      renderBeforeHydration={isRenderBeforeHydration}
      {...rest}
    />
  )
}

export const TABS_SEGMENTED_INDICATOR_CLASS_NAME = {
  BASE: styles.tabs_segmented_indicator,
} as const
