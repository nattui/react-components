import { Tabs as BaseTabs } from "@base-ui/react"
import styles from "@/tabs-underline/tabs-underline.module.css"

export interface TabsUnderlineProps extends BaseTabs.Root.Props {}

export function TabsUnderline(props: TabsUnderlineProps) {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = `
    ${TABS_UNDERLINE_CLASS_NAME.BASE}
    ${customClassName}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return <BaseTabs.Root className={combinedClassName} data-slot="tabs" {...rest} />
}

export const TABS_UNDERLINE_CLASS_NAME = {
  BASE: styles.tabs_underline,
} as const
