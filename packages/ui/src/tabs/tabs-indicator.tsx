import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs/tabs-indicator.module.css"

export interface TabsIndicatorProps extends Omit<
  BaseTabs.Indicator.Props,
  "renderBeforeHydration"
> {
  isRenderBeforeHydration?: boolean
}

export function TabsIndicator(props: TabsIndicatorProps) {
  const { className: customClassName = "", isRenderBeforeHydration = true, ...rest } = props

  const combinedClassName = `
    ${TABS_INDICATOR_CLASS_NAME.BASE}
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

export const TABS_INDICATOR_CLASS_NAME = {
  BASE: styles.tabs_indicator,
} as const
