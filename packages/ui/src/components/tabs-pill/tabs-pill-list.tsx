import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { TabsPillIndicator } from "@/components/tabs-pill/tabs-pill-indicator"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/tabs-pill/tabs-pill-list.module.css"

export interface TabsPillListProps extends BaseTabs.List.Props {}

export function TabsPillList(props: TabsPillListProps): JSX.Element {
  const { className: customClassName = "", children = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_PILL_LIST_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTabs.List className={combinedClassName} data-slot="tabs-pill-list" {...rest}>
      {children}
      <TabsPillIndicator />
    </BaseTabs.List>
  )
}

export const TABS_PILL_LIST_CLASS_NAME = {
  BASE: styles.tabs_pill_list,
} as const
