import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import { TabsPillIndicator } from "./tabs-pill-indicator"
import styles from "./tabs-pill-list.module.css"

export interface TabsPillListProps extends BaseTabs.List.Props {}

export function TabsPillList(props: TabsPillListProps): JSX.Element {
  const { className: customClassName = "", children = undefined, ...rest } = props

  const combinedClassName = tabsPillListVariants({ className: customClassName })

  return (
    <BaseTabs.List className={combinedClassName} data-slot="tabs-pill-list" {...rest}>
      {children}
      <TabsPillIndicator />
    </BaseTabs.List>
  )
}

export const tabsPillListVariants = cva(styles.base)
