import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"
import { menuItemStyles } from "./menu-item.stylex"

export { menuItemStyles } from "./menu-item.stylex"

export interface MenuItemProps extends Omit<BaseMenu.Item.Props, "className" | "disabled"> {
  className?: string
  isDisabled?: BaseMenu.Item.Props["disabled"]
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  return (
    <BaseMenu.Item
      className={cn(sx(pickerItemStyles.base, menuItemStyles.base), customClassName)}
      data-slot="menu-item"
      disabled={isDisabled}
      {...rest}
    />
  )
}
