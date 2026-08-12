import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { TabsUnderlineIndicator } from "./tabs-underline-indicator"
import { tabsUnderlineListStyles } from "./tabs-underline-list.stylex"

export { tabsUnderlineListStyles } from "./tabs-underline-list.stylex"

export interface TabsUnderlineListProps extends BaseTabs.List.Props {}

export function TabsUnderlineList(props: TabsUnderlineListProps): JSX.Element {
  const { className: customClassName = "", children = undefined, ...rest } = props

  return (
    <BaseTabs.List
      className={cn(sx(tabsUnderlineListStyles.base), customClassName)}
      data-slot="tabs-underline-list"
      {...rest}
    >
      {children}
      <TabsUnderlineIndicator />
    </BaseTabs.List>
  )
}
