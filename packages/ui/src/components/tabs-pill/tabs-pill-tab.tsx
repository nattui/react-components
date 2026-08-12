import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { tabsPillTabStyles } from "./tabs-pill-tab.stylex"

export { tabsPillTabStyles } from "./tabs-pill-tab.stylex"

export interface TabsPillTabProps extends Omit<BaseTabs.Tab.Props, "nativeButton"> {
  isNativeButton?: BaseTabs.Tab.Props["nativeButton"]
}

export function TabsPillTab(props: TabsPillTabProps): JSX.Element {
  const { className: customClassName = "", isNativeButton = true, ...rest } = props

  return (
    <div className={sx(tabsPillTabStyles.wrapper)}>
      <BaseTabs.Tab
        className={cn(sx(tabsPillTabStyles.base), customClassName)}
        data-slot="tabs-pill-tab"
        nativeButton={isNativeButton}
        {...rest}
      />
      <div className={sx(tabsPillTabStyles.background)} />
    </div>
  )
}
