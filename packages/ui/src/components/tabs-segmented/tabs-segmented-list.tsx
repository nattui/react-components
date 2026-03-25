import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { TabsSegmentedIndicator } from "@/components/tabs-segmented/tabs-segmented-indicator"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/tabs-segmented/tabs-segmented-list.module.css"

export interface TabsSegmentedListProps extends BaseTabs.List.Props {}

export function TabsSegmentedList(props: TabsSegmentedListProps): JSX.Element {
  const { className: customClassName = "", children = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_SEGMENTED_LIST_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTabs.List className={combinedClassName} data-slot="tabs-segmented-list" {...rest}>
      {children}
      <TabsSegmentedIndicator />
    </BaseTabs.List>
  )
}

export const TABS_SEGMENTED_LIST_CLASS_NAME = {
  BASE: styles.tabs_segmented_list,
} as const
