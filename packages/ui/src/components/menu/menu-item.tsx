import { Menu as BaseMenu } from "@base-ui/react"
import { cx } from "class-variance-authority"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"

export interface MenuItemProps extends Omit<BaseMenu.Item.Props, "className" | "disabled"> {
  className?: string
  isDisabled?: BaseMenu.Item.Props["disabled"]
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  const { children, className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = cx(MENU_CLASS_NAME.ITEM, customClassName)

  return (
    <BaseMenu.Item
      className={combinedClassName}
      data-slot="menu-item"
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </BaseMenu.Item>
  )
}
