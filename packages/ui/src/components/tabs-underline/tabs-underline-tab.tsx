import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsUnderlineTabStyles } from "./tabs-underline-tab.stylex"

export interface TabsUnderlineTabProps extends BaseTabs.Tab.Props {}

export function TabsUnderlineTab(props: TabsUnderlineTabProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(tabsUnderlineTabStyles.base, className)

  return (
    <BaseTabs.Tab
      className={combinedClassName}
      data-component="tabs-underline-tab"
      nativeButton
      {...rest}
    />
  )
}
