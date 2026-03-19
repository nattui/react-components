import { Tabs as BaseTabs } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/tabs-segmented/tabs-segmented-tab.module.css"

export interface TabsSegmentedTabProps extends BaseTabs.Tab.Props {
  isNativeButton?: boolean
}

export function TabsSegmentedTab(props: TabsSegmentedTabProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_SEGMENTED_TAB_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <BaseTabs.Tab className={combinedClassName} data-slot="tabs-tab" {...rest} />
}

export const TABS_SEGMENTED_TAB_CLASS_NAME = {
  BASE: styles.tabs_segmented_tab,
} as const
