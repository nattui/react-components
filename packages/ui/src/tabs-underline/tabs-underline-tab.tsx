import { Tabs as BaseTabs } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/tabs-underline/tabs-underline-tab.module.css"

export interface TabsUnderlineTabProps extends BaseTabs.Tab.Props {}

export function TabsUnderlineTab(props: TabsUnderlineTabProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_UNDERLINE_TAB_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <BaseTabs.Tab className={combinedClassName} data-slot="tabs-tab" {...rest} />
}

export const TABS_UNDERLINE_TAB_CLASS_NAME = {
  BASE: styles.tabs_underline_tab,
} as const
