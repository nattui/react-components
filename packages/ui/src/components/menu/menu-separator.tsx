import { Menu as BaseMenu } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "../picker/picker-separator.module.css"

export interface MenuSeparatorProps extends Omit<BaseMenu.Separator.Props, "className"> {
  className?: string
}

export function MenuSeparator(props: MenuSeparatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = menuSeparatorVariants({ className: customClassName })

  return <BaseMenu.Separator className={combinedClassName} data-slot="menu-separator" {...rest} />
}

export const menuSeparatorVariants = cva(styles.base)
