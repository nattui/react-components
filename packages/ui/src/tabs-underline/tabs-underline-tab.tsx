import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs-underline/tabs-underline-tab.module.css"

export interface TabsUnderlineTabProps extends Omit<BaseTabs.Tab.Props, "nativeButton"> {
  isNativeButton?: boolean
}

export function TabsUnderlineTab(props: TabsUnderlineTabProps) {
  const { className: customClassName = "", isNativeButton = true, ...rest } = props

  const combinedClassName = `
    ${TABS_UNDERLINE_TAB_CLASS_NAME.BASE}
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

export const TABS_UNDERLINE_TAB_CLASS_NAME = {
  BASE: styles.tabs_underline_tab,
} as const
