import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsPillTabStyles } from "./tabs-pill-tab.stylex"

export { tabsPillTabStyles } from "./tabs-pill-tab.stylex"

export interface TabsPillTabProps extends BaseTabs.Tab.Props {}

export function TabsPillTab(props: TabsPillTabProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <div className={cn(tabsPillTabStyles.wrapper)}>
      <BaseTabs.Tab
        className={cn(tabsPillTabStyles.base, customClassName)}
        data-slot="tabs-pill-tab"
        nativeButton
        {...rest}
      />
      <div className={cn(tabsPillTabStyles.background)} />
    </div>
  )
}
