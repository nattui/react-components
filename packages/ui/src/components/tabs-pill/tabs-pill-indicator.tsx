import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/tabs-pill/tabs-pill-indicator.module.css"

export interface TabsPillIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsPillIndicator(props: TabsPillIndicatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_PILL_INDICATOR_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-slot="tabs-pill-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}

export const TABS_PILL_INDICATOR_CLASS_NAME = {
  BASE: styles.tabs_pill_indicator,
} as const
