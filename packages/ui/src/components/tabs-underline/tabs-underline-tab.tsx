import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsUnderlineTabStyles } from "./tabs-underline-tab.stylex"

export { tabsUnderlineTabStyles } from "./tabs-underline-tab.stylex"

export interface TabsUnderlineTabProps extends BaseTabs.Tab.Props {}

export function TabsUnderlineTab(props: TabsUnderlineTabProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseTabs.Tab
      className={cn(tabsUnderlineTabStyles.base, customClassName)}
      data-slot="tabs-underline-tab"
      nativeButton
      {...rest}
    />
  )
}
