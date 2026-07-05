import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./tabs-underline-indicator.module.css"

export interface TabsUnderlineIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsUnderlineIndicator(props: TabsUnderlineIndicatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = tabsUnderlineIndicatorVariants({ className: customClassName })

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-slot="tabs-underline-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}

export const tabsUnderlineIndicatorVariants = cva(styles.tabs_underline_indicator)
