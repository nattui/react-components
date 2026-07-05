import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./tabs-panel.module.css"

export interface TabsPanelProps extends BaseTabs.Panel.Props {}

export function TabsPanel(props: TabsPanelProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = tabsPanelVariants({ className: customClassName })

  return <BaseTabs.Panel className={combinedClassName} data-slot="tabs-panel" {...rest} />
}

export const tabsPanelVariants = cva(styles.tabs_panel)
