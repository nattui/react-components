import { Tabs as BaseTabs } from "@base-ui/react"

export function TabsTab(props: BaseTabs.Tab.Props) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.Tab className={combinedClassName} data-slot="tabs-tab" {...rest} />
}
