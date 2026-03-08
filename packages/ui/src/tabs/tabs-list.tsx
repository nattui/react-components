import { Tabs as BaseTabs } from "@base-ui/react"

export interface TabsListProps extends BaseTabs.List.Props {}

export function TabsList(props: TabsListProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.List className={combinedClassName} data-slot="tabs-list" {...rest} />
}
