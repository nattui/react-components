import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/tabs-segmented/tabs-segmented-indicator.module.css"

export interface TabsSegmentedIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsSegmentedIndicator(props: TabsSegmentedIndicatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_SEGMENTED_INDICATOR_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-slot="tabs-segmented-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}

export const TABS_SEGMENTED_INDICATOR_CLASS_NAME = {
  BASE: styles.tabs_segmented_indicator,
} as const
