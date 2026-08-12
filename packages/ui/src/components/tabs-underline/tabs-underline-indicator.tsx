import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsUnderlineIndicatorStyles } from "./tabs-underline-indicator.stylex"

export interface TabsUnderlineIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsUnderlineIndicator(props: TabsUnderlineIndicatorProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(tabsUnderlineIndicatorStyles.base, className)

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-component="tabs-underline-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}
