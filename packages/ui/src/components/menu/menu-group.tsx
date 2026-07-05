import { Menu as BaseMenu } from "@base-ui/react"
import { cx } from "class-variance-authority"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"

export interface MenuGroupProps extends Omit<BaseMenu.Group.Props, "className"> {
  className?: string
}

export function MenuGroup(props: MenuGroupProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = cx(MENU_CLASS_NAME.GROUP, customClassName)

  return <BaseMenu.Group className={combinedClassName} data-slot="menu-group" {...rest} />
}
