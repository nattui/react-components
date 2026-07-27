import { Menu as BaseMenu } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import pickerStyles from "../picker/picker-item.module.css"
import styles from "./menu-item.module.css"

export interface MenuLinkItemProps extends Omit<BaseMenu.LinkItem.Props, "className"> {
  className?: string
}

export function MenuLinkItem(props: MenuLinkItemProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = menuLinkItemVariants({ className: customClassName })

  return <BaseMenu.LinkItem className={combinedClassName} data-slot="menu-link-item" {...rest} />
}

export const menuLinkItemVariants = cva([pickerStyles.base, styles.base])
