import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsSegmentedTabStyles } from "./tabs-segmented-tab.stylex"

export interface TabsSegmentedTabProps extends BaseTabs.Tab.Props {}

export function TabsSegmentedTab(props: TabsSegmentedTabProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(tabsSegmentedTabStyles.base, className)

  return (
    <BaseTabs.Tab
      className={combinedClassName}
      data-component="tabs-segmented-tab"
      nativeButton
      {...rest}
    />
  )
}
