import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsPanelStyles } from "./tabs-panel.stylex"

export interface TabsPanelProps extends BaseTabs.Panel.Props {}

export function TabsPanel(props: TabsPanelProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(tabsPanelStyles.base, className)

  return <BaseTabs.Panel className={combinedClassName} data-component="tabs-panel" {...rest} />
}
