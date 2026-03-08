import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs/tabs-tab.module.css"

export interface TabsTabProps extends Omit<BaseTabs.Tab.Props, "nativeButton"> {
  isNativeButton?: boolean
}

export function TabsTab(props: TabsTabProps) {
  const { className: customClassName = "", isNativeButton = true, ...rest } = props

  const combinedClassName = `
    ${TABS_TAB_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <BaseTabs.Tab
      className={combinedClassName}
      data-slot="tabs-tab"
      nativeButton={isNativeButton}
      {...rest}
    />
  )
}

export const TABS_TAB_CLASS_NAME = {
  BASE: styles.tabs_tab,
} as const
