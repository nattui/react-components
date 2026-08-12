import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsPillTabStyles } from "./tabs-pill-tab.stylex"

export interface TabsPillTabProps extends BaseTabs.Tab.Props {}

export function TabsPillTab(props: TabsPillTabProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(tabsPillTabStyles.base, className)

  return (
    <div className={cn(tabsPillTabStyles.wrapper)}>
      <BaseTabs.Tab
        className={combinedClassName}
        data-component="tabs-pill-tab"
        nativeButton
        {...rest}
      />
      <div className={cn(tabsPillTabStyles.background)} />
    </div>
  )
}
