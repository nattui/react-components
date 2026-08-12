import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsSegmentedIndicatorStyles } from "./tabs-segmented-indicator.stylex"

export interface TabsSegmentedIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsSegmentedIndicator(props: TabsSegmentedIndicatorProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(tabsSegmentedIndicatorStyles.base, className)

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-component="tabs-segmented-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}
