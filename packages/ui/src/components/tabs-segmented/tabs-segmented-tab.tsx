import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { tabsSegmentedTabStyles } from "./tabs-segmented-tab.stylex"

export { tabsSegmentedTabStyles } from "./tabs-segmented-tab.stylex"

export interface TabsSegmentedTabProps extends BaseTabs.Tab.Props {}

export function TabsSegmentedTab(props: TabsSegmentedTabProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseTabs.Tab
      className={cn(sx(tabsSegmentedTabStyles.base), customClassName)}
      data-slot="tabs-segmented-tab"
      nativeButton
      {...rest}
    />
  )
}
