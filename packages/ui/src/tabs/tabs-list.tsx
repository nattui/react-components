import { Tabs as BaseTabs } from "@base-ui/react"

export function TabsList(props: BaseTabs.List.Props) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.List className={combinedClassName} data-slot="tabs-list" {...rest} />
}
