import { Menu as BaseMenu } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "../picker/picker-group.module.css"

export interface MenuGroupLabelProps extends Omit<BaseMenu.GroupLabel.Props, "className"> {
  className?: string
}

export function MenuGroupLabel(props: MenuGroupLabelProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = menuGroupLabelVariants({ className: customClassName })

  return (
    <BaseMenu.GroupLabel className={combinedClassName} data-slot="menu-group-label" {...rest} />
  )
}

export const menuGroupLabelVariants = cva(styles.label)
