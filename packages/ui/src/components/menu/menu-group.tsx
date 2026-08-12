import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface MenuGroupProps extends Omit<BaseMenu.Group.Props, "className"> {
  className?: string
}

export function MenuGroup(props: MenuGroupProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerGroupStyles.base, className)

  return <BaseMenu.Group className={combinedClassName} data-component="menu-group" {...rest} />
}
