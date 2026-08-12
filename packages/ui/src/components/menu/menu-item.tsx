import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"
import { menuItemStyles } from "./menu-item.stylex"

export interface MenuItemProps extends Omit<BaseMenu.Item.Props, "className"> {
  className?: string
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerItemStyles.base, menuItemStyles.base, className)

  return <BaseMenu.Item className={combinedClassName} data-component="menu-item" {...rest} />
}
