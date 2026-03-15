import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs/tabs-panel.module.css"

export interface TabsPanelProps extends BaseTabs.Panel.Props {}

export function TabsPanel(props: TabsPanelProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${TABS_PANEL_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.Panel className={combinedClassName} data-slot="tabs-panel" {...rest} />
}

export const TABS_PANEL_CLASS_NAME = {
  BASE: styles.tabs_panel,
} as const
