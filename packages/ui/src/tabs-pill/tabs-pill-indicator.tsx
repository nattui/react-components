import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs-pill/tabs-pill-indicator.module.css"

export interface TabsPillIndicatorProps extends Omit<
  BaseTabs.Indicator.Props,
  "renderBeforeHydration"
> {
  isRenderBeforeHydration?: boolean
}

export function TabsPillIndicator(props: TabsPillIndicatorProps) {
  const { className: customClassName = "", isRenderBeforeHydration = true, ...rest } = props

  const combinedClassName = `
    ${TABS_PILL_INDICATOR_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-slot="tabs-indicator"
      renderBeforeHydration={isRenderBeforeHydration}
      {...rest}
    />
  )
}

export const TABS_PILL_INDICATOR_CLASS_NAME = {
  BASE: styles.tabs_pill_indicator,
} as const
