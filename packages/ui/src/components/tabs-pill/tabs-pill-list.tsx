import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { TabsPillIndicator } from "./tabs-pill-indicator"
import { tabsPillListStyles } from "./tabs-pill-list.stylex"

export interface TabsPillListProps extends BaseTabs.List.Props {}

export function TabsPillList(props: TabsPillListProps): JSX.Element {
  const { className = "", children = undefined, ...rest } = props

  const combinedClassName = cn(tabsPillListStyles.base, className)

  return (
    <BaseTabs.List className={combinedClassName} data-component="tabs-pill-list" {...rest}>
      {children}
      <TabsPillIndicator />
    </BaseTabs.List>
  )
}
