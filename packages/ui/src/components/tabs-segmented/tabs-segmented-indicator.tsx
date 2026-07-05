import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./tabs-segmented-indicator.module.css"

export interface TabsSegmentedIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsSegmentedIndicator(props: TabsSegmentedIndicatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = tabsSegmentedIndicatorVariants({ className: customClassName })

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-slot="tabs-segmented-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}

export const tabsSegmentedIndicatorVariants = cva(styles.tabs_segmented_indicator)
