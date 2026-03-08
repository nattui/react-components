import { Tabs as BaseTabs } from "@base-ui/react"

export function TabsPanel(props: BaseTabs.Panel.Props) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.Panel className={combinedClassName} data-slot="tabs-panel" {...rest} />
}
