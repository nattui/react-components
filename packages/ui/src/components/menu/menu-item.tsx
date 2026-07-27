import { Menu as BaseMenu } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import pickerStyles from "../picker/picker-item.module.css"
import styles from "./menu-item.module.css"

export interface MenuItemProps extends Omit<BaseMenu.Item.Props, "className" | "disabled"> {
  className?: string
  isDisabled?: BaseMenu.Item.Props["disabled"]
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = menuItemVariants({ className: customClassName })

  return (
    <BaseMenu.Item
      className={combinedClassName}
      data-slot="menu-item"
      disabled={isDisabled}
      {...rest}
    />
  )
}

export const menuItemVariants = cva([pickerStyles.base, styles.base])
