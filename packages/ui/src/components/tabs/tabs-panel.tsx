import { Tabs as BaseTabs } from "@base-ui/react"
import * as stylex from "@stylexjs/stylex"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsPanelStyles } from "./tabs-panel.stylex"

export { tabsPanelStyles } from "./tabs-panel.stylex"

export interface TabsPanelProps extends BaseTabs.Panel.Props {}

export function TabsPanel(props: TabsPanelProps): JSX.Element {
  const { className = "", ...rest } = props
  const { className: stylexClassName } = stylex.props(tabsPanelStyles.base)

  return (
    <BaseTabs.Panel className={cn(stylexClassName, className)} data-slot="tabs-panel" {...rest} />
  )
}
