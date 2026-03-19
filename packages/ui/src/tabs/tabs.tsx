import { Tabs as BaseTabs } from "@base-ui/react"
import { normalizeWhitespace } from "@/utils/normalize-whitespace"
import styles from "@/tabs/tabs.module.css"

export interface TabsProps extends BaseTabs.Root.Props {}

export function Tabs(props: TabsProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <BaseTabs.Root className={combinedClassName} data-slot="tabs" {...rest} />
}

export const TABS_CLASS_NAME = {
  BASE: styles.tabs,
} as const
