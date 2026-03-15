import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs-underline/tabs-underline-panel.module.css"

export interface TabsUnderlinePanelProps extends BaseTabs.Panel.Props {}

export function TabsUnderlinePanel(props: TabsUnderlinePanelProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${TABS_UNDERLINE_PANEL_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.Panel className={combinedClassName} data-slot="tabs-panel" {...rest} />
}

export const TABS_UNDERLINE_PANEL_CLASS_NAME = {
  BASE: styles.tabs_underline_panel,
} as const
