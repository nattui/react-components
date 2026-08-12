import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { tabsUnderlineIndicatorStyles } from "./tabs-underline-indicator.stylex"

export { tabsUnderlineIndicatorStyles } from "./tabs-underline-indicator.stylex"

export interface TabsUnderlineIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsUnderlineIndicator(props: TabsUnderlineIndicatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseTabs.Indicator
      className={cn(sx(tabsUnderlineIndicatorStyles.base), customClassName)}
      data-slot="tabs-underline-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}
