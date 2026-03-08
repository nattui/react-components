import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs/tabs-list.module.css"

export interface TabsListProps extends BaseTabs.List.Props {}

export function TabsList(props: TabsListProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${TABS_LIST_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.List className={combinedClassName} data-slot="tabs-list" {...rest} />
}

export const TABS_LIST_CLASS_NAME = {
  BASE: styles.tabs_list,
} as const
