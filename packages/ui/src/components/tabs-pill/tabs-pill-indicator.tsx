import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsPillIndicatorStyles } from "./tabs-pill-indicator.stylex"

export interface TabsPillIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsPillIndicator(props: TabsPillIndicatorProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(tabsPillIndicatorStyles.base, className)

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-component="tabs-pill-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}
