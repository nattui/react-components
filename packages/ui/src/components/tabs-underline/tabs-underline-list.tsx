import { Tabs as BaseTabs } from "@base-ui/react"
import { TabsUnderlineIndicator } from "@/components/tabs-underline/tabs-underline-indicator"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/tabs-underline/tabs-underline-list.module.css"

export interface TabsUnderlineListProps extends BaseTabs.List.Props {}

export function TabsUnderlineList(props: TabsUnderlineListProps) {
  const { className: customClassName = "", children = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_UNDERLINE_LIST_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTabs.List className={combinedClassName} data-slot="tabs-underline-list" {...rest}>
      {children}
      <TabsUnderlineIndicator />
    </BaseTabs.List>
  )
}

export const TABS_UNDERLINE_LIST_CLASS_NAME = {
  BASE: styles.tabs_underline_list,
} as const
