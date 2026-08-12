import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"
import { menuItemStyles } from "./menu-item.stylex"

export interface MenuLinkItemProps extends Omit<BaseMenu.LinkItem.Props, "className"> {
  className?: string
}

export function MenuLinkItem(props: MenuLinkItemProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerItemStyles.base, menuItemStyles.base, className)

  return (
    <BaseMenu.LinkItem className={combinedClassName} data-component="menu-link-item" {...rest} />
  )
}
