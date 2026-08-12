import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsStyles } from "./tabs.stylex"

export interface TabsProps extends BaseTabs.Root.Props {}

export function Tabs(props: TabsProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(tabsStyles.base, className)

  return <BaseTabs.Root className={combinedClassName} data-component="tabs" {...rest} />
}
