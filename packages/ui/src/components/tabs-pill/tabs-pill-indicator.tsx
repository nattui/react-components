import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./tabs-pill-indicator.module.css"

export interface TabsPillIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsPillIndicator(props: TabsPillIndicatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = tabsPillIndicatorVariants({ className: customClassName })

  return (
    <BaseTabs.Indicator
      className={combinedClassName}
      data-slot="tabs-pill-indicator"
      renderBeforeHydration
      {...rest}
    />
  )
}

export const tabsPillIndicatorVariants = cva(styles.base)
