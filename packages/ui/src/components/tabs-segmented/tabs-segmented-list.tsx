import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { TabsSegmentedIndicator } from "./tabs-segmented-indicator"
import { tabsSegmentedListStyles } from "./tabs-segmented-list.stylex"

export { tabsSegmentedListStyles } from "./tabs-segmented-list.stylex"

export interface TabsSegmentedListProps extends BaseTabs.List.Props {}

export function TabsSegmentedList(props: TabsSegmentedListProps): JSX.Element {
  const { className: customClassName = "", children = undefined, ...rest } = props

  return (
    <BaseTabs.List
      className={cn(sx(tabsSegmentedListStyles.base), customClassName)}
      data-slot="tabs-segmented-list"
      {...rest}
    >
      {children}
      <TabsSegmentedIndicator />
    </BaseTabs.List>
  )
}
