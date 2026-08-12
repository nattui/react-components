import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { tabsSegmentedIndicatorStyles } from "./tabs-segmented-indicator.stylex"

export { tabsSegmentedIndicatorStyles } from "./tabs-segmented-indicator.stylex"

export interface TabsSegmentedIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsSegmentedIndicator(props: TabsSegmentedIndicatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseTabs.Indicator
      className={cn(sx(tabsSegmentedIndicatorStyles.base), customClassName)}
      data-slot="tabs-segmented-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}
