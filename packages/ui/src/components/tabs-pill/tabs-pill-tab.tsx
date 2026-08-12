import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { tabsPillTabStyles } from "./tabs-pill-tab.stylex"

export { tabsPillTabStyles } from "./tabs-pill-tab.stylex"

export interface TabsPillTabProps extends BaseTabs.Tab.Props {}

export function TabsPillTab(props: TabsPillTabProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <div className={sx(tabsPillTabStyles.wrapper)}>
      <BaseTabs.Tab
        className={cn(sx(tabsPillTabStyles.base), customClassName)}
        data-slot="tabs-pill-tab"
        nativeButton
        {...rest}
      />
      <div className={sx(tabsPillTabStyles.background)} />
    </div>
  )
}
