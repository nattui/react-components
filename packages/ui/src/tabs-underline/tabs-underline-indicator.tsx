import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs-underline/tabs-underline-indicator.module.css"

export interface TabsUnderlineIndicatorProps extends Omit<
  BaseTabs.Indicator.Props,
  "renderBeforeHydration"
> {
  isRenderBeforeHydration?: boolean
}

export function TabsUnderlineIndicator(props: TabsUnderlineIndicatorProps) {
  const { className: customClassName = "", isRenderBeforeHydration = true, ...rest } = props

  const combinedClassName = `
    ${TABS_UNDERLINE_INDICATOR_CLASS_NAME.BASE}
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

export const TABS_UNDERLINE_INDICATOR_CLASS_NAME = {
  BASE: styles.tabs_underline_indicator,
} as const
