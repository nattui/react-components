import { Tabs as BaseTabs } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./tabs.module.css"

export interface TabsProps extends BaseTabs.Root.Props {}

export function Tabs(props: TabsProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = tabsVariants({ className: customClassName })

  return <BaseTabs.Root className={combinedClassName} data-slot="tabs" {...rest} />
}

export const tabsVariants = cva(styles.tabs)
