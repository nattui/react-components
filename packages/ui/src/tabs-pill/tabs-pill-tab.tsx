import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs-pill/tabs-pill-tab.module.css"

export interface TabsPillTabProps extends Omit<BaseTabs.Tab.Props, "nativeButton"> {
  isNativeButton?: boolean
}

export function TabsPillTab(props: TabsPillTabProps) {
  const { className: customClassName = "", isNativeButton = true, ...rest } = props

  const combinedClassName = `
    ${TABS_PILL_TAB_CLASS_NAME.BASE}
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

export const TABS_PILL_TAB_CLASS_NAME = {
  BASE: styles.tabs_pill_tab,
} as const
