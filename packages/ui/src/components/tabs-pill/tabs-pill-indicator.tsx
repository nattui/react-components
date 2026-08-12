import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsPillIndicatorStyles } from "./tabs-pill-indicator.stylex"

export { tabsPillIndicatorStyles } from "./tabs-pill-indicator.stylex"

export interface TabsPillIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsPillIndicator(props: TabsPillIndicatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseTabs.Indicator
      className={cn(tabsPillIndicatorStyles.base, customClassName)}
      data-slot="tabs-pill-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}
