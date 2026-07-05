import { Menu as BaseMenu } from "@base-ui/react"
import { cx } from "class-variance-authority"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"

export interface MenuSeparatorProps extends Omit<BaseMenu.Separator.Props, "className"> {
  className?: string
}

export function MenuSeparator(props: MenuSeparatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = cx(MENU_CLASS_NAME.SEPARATOR, customClassName)

  return <BaseMenu.Separator className={combinedClassName} data-slot="menu-separator" {...rest} />
}
