import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs/tabs.module.css"

export interface TabsProps extends BaseTabs.Root.Props {}

export function Tabs(props: TabsProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${TABS_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.Root className={combinedClassName} data-slot="tabs" {...rest} />
}

export const TABS_CLASS_NAME = {
  BASE: styles.tabs,
} as const
