import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import { TabsSegmentedIndicator } from "./tabs-segmented-indicator"
import styles from "./tabs-segmented-list.module.css"

export interface TabsSegmentedListProps extends BaseTabs.List.Props {}

export function TabsSegmentedList(props: TabsSegmentedListProps): JSX.Element {
  const { className: customClassName = "", children = "", ...rest } = props

  const combinedClassName = tabsSegmentedListVariants({ className: customClassName })

  return (
    <BaseTabs.List className={combinedClassName} data-slot="tabs-segmented-list" {...rest}>
      {children}
      <TabsSegmentedIndicator />
    </BaseTabs.List>
  )
}

export const tabsSegmentedListVariants = cva(styles.tabs_segmented_list)
