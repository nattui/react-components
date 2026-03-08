import { Tabs as BaseTabs } from "@base-ui/react"

export function Tabs(props: BaseTabs.Root.Props) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.Root className={combinedClassName} data-slot="tabs" {...rest} />
}
