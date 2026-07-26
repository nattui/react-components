import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./tabs-segmented-tab.module.css"

export interface TabsSegmentedTabProps extends Omit<BaseTabs.Tab.Props, "nativeButton"> {
  isNativeButton?: BaseTabs.Tab.Props["nativeButton"]
}

export function TabsSegmentedTab(props: TabsSegmentedTabProps): JSX.Element {
  const { className: customClassName = "", isNativeButton = true, ...rest } = props

  const combinedClassName = tabsSegmentedTabVariants({ className: customClassName })

  return (
    <BaseTabs.Tab
      className={combinedClassName}
      data-slot="tabs-segmented-tab"
      nativeButton={isNativeButton}
      {...rest}
    />
  )
}

export const tabsSegmentedTabVariants = cva(styles.base)
