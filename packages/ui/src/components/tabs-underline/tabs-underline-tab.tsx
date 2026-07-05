import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./tabs-underline-tab.module.css"

export interface TabsUnderlineTabProps extends Omit<BaseTabs.Tab.Props, "nativeButton"> {
  isNativeButton?: BaseTabs.Tab.Props["nativeButton"]
}

export function TabsUnderlineTab(props: TabsUnderlineTabProps): JSX.Element {
  const { className: customClassName = "", isNativeButton = true, ...rest } = props

  const combinedClassName = tabsUnderlineTabVariants({ className: customClassName })

  return (
    <BaseTabs.Tab
      className={combinedClassName}
      data-slot="tabs-underline-tab"
      nativeButton={isNativeButton}
      {...rest}
    />
  )
}

export const tabsUnderlineTabVariants = cva(styles.tabs_underline_tab)
