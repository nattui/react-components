import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/tabs-underline/tabs-underline-indicator.module.css"

export interface TabsUnderlineIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsUnderlineIndicator(props: TabsUnderlineIndicatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_UNDERLINE_INDICATOR_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-slot="tabs-underline-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}

export const TABS_UNDERLINE_INDICATOR_CLASS_NAME = {
  BASE: styles.tabs_underline_indicator,
} as const
