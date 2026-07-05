import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import { TabsUnderlineIndicator } from "./tabs-underline-indicator"
import styles from "./tabs-underline-list.module.css"

export interface TabsUnderlineListProps extends BaseTabs.List.Props {}

export function TabsUnderlineList(props: TabsUnderlineListProps): JSX.Element {
  const { className: customClassName = "", children = "", ...rest } = props

  const combinedClassName = tabsUnderlineListVariants({ className: customClassName })

  return (
    <BaseTabs.List className={combinedClassName} data-slot="tabs-underline-list" {...rest}>
      {children}
      <TabsUnderlineIndicator />
    </BaseTabs.List>
  )
}

export const tabsUnderlineListVariants = cva(styles.tabs_underline_list)
