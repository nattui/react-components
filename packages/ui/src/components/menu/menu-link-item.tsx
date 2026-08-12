import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"
import { menuItemStyles } from "./menu-item.stylex"

export interface MenuLinkItemProps extends Omit<BaseMenu.LinkItem.Props, "className"> {
  className?: string
}

export function MenuLinkItem(props: MenuLinkItemProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseMenu.LinkItem
      className={cn(sx(pickerItemStyles.base, menuItemStyles.base), customClassName)}
      data-slot="menu-link-item"
      {...rest}
    />
  )
}
