import { Tabs as BaseTabs } from "@base-ui/react"

export interface TabsProps extends BaseTabs.Root.Props {}

export function Tabs(props: TabsProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.Root className={combinedClassName} data-slot="tabs" {...rest} />
}
