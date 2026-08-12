import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { TabsSegmentedIndicator } from "./tabs-segmented-indicator"
import { tabsSegmentedListStyles } from "./tabs-segmented-list.stylex"

export interface TabsSegmentedListProps extends BaseTabs.List.Props {}

export function TabsSegmentedList(props: TabsSegmentedListProps): JSX.Element {
  const { className = "", children = undefined, ...rest } = props

  const combinedClassName = cn(tabsSegmentedListStyles.base, className)

  return (
    <BaseTabs.List className={combinedClassName} data-component="tabs-segmented-list" {...rest}>
      {children}
      <TabsSegmentedIndicator />
    </BaseTabs.List>
  )
}
