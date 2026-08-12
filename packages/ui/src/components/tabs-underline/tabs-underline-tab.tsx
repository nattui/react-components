import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { tabsUnderlineTabStyles } from "./tabs-underline-tab.stylex"

export { tabsUnderlineTabStyles } from "./tabs-underline-tab.stylex"

export interface TabsUnderlineTabProps extends Omit<BaseTabs.Tab.Props, "nativeButton"> {
  isNativeButton?: BaseTabs.Tab.Props["nativeButton"]
}

export function TabsUnderlineTab(props: TabsUnderlineTabProps): JSX.Element {
  const { className: customClassName = "", isNativeButton = true, ...rest } = props

  return (
    <BaseTabs.Tab
      className={cn(sx(tabsUnderlineTabStyles.base), customClassName)}
      data-slot="tabs-underline-tab"
      nativeButton={isNativeButton}
      {...rest}
    />
  )
}
