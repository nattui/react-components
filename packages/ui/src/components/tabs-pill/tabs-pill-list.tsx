import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { TabsPillIndicator } from "./tabs-pill-indicator"
import { tabsPillListStyles } from "./tabs-pill-list.stylex"

export { tabsPillListStyles } from "./tabs-pill-list.stylex"

export interface TabsPillListProps extends BaseTabs.List.Props {}

export function TabsPillList(props: TabsPillListProps): JSX.Element {
  const { className: customClassName = "", children = undefined, ...rest } = props

  return (
    <BaseTabs.List
      className={cn(tabsPillListStyles.base, customClassName)}
      data-slot="tabs-pill-list"
      {...rest}
    >
      {children}
      <TabsPillIndicator />
    </BaseTabs.List>
  )
}
