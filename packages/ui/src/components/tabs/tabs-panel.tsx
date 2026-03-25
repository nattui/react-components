import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/components/tabs/tabs-panel.module.css"

export interface TabsPanelProps extends BaseTabs.Panel.Props {}

export function TabsPanel(props: TabsPanelProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_PANEL_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <BaseTabs.Panel className={combinedClassName} data-slot="tabs-panel" {...rest} />
}

export const TABS_PANEL_CLASS_NAME = {
  BASE: styles.tabs_panel,
} as const
