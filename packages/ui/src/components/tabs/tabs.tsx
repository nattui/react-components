import { Tabs as BaseTabs } from "@base-ui/react"
import * as stylex from "@stylexjs/stylex"
import type { JSX } from "react"
import { cn } from "../cn"
import { tabsStyles } from "./tabs.stylex"

export { tabsStyles } from "./tabs.stylex"

export interface TabsProps extends BaseTabs.Root.Props {}

export function Tabs(props: TabsProps): JSX.Element {
  const { className = "", ...rest } = props
  const { className: stylexClassName } = stylex.props(tabsStyles.base)

  return <BaseTabs.Root className={cn(stylexClassName, className)} data-slot="tabs" {...rest} />
}
