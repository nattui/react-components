import { Menu as BaseMenu } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "../picker/picker-group.module.css"

export interface MenuGroupProps extends Omit<BaseMenu.Group.Props, "className"> {
  className?: string
}

export function MenuGroup(props: MenuGroupProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = menuGroupVariants({ className: customClassName })

  return <BaseMenu.Group className={combinedClassName} data-slot="menu-group" {...rest} />
}

export const menuGroupVariants = cva(styles.base)
