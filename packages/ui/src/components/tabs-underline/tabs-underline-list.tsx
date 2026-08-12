import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { TabsUnderlineIndicator } from "./tabs-underline-indicator"
import { tabsUnderlineListStyles } from "./tabs-underline-list.stylex"

export interface TabsUnderlineListProps extends BaseTabs.List.Props {}

export function TabsUnderlineList(props: TabsUnderlineListProps): JSX.Element {
  const { className = "", children = undefined, ...rest } = props

  const combinedClassName = cn(tabsUnderlineListStyles.base, className)

  return (
    <BaseTabs.List className={combinedClassName} data-component="tabs-underline-list" {...rest}>
      {children}
      <TabsUnderlineIndicator />
    </BaseTabs.List>
  )
}
