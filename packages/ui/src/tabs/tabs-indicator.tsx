import { Tabs as BaseTabs } from "@base-ui/react"

export function TabsIndicator(props: BaseTabs.Indicator.Props) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.Indicator className={combinedClassName} data-slot="tabs-indicator" {...rest} />
}
