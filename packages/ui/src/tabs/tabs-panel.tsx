import { Tabs as BaseTabs } from "@base-ui/react"

export interface TabsPanelProps extends BaseTabs.Panel.Props {}

export function TabsPanel(props: TabsPanelProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.Panel className={combinedClassName} data-slot="tabs-panel" {...rest} />
}
