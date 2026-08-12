import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"
import { menuItemStyles } from "./menu-item.stylex"

export { menuItemStyles } from "./menu-item.stylex"

export interface MenuItemProps extends Omit<BaseMenu.Item.Props, "className"> {
  className?: string
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseMenu.Item
      className={cn(sx(pickerItemStyles.base, menuItemStyles.base), customClassName)}
      data-slot="menu-item"
      {...rest}
    />
  )
}
