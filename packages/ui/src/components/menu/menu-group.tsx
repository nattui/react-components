import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface MenuGroupProps extends Omit<BaseMenu.Group.Props, "className"> {
  className?: string
}

export function MenuGroup(props: MenuGroupProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseMenu.Group
      className={cn(pickerGroupStyles.base, customClassName)}
      data-slot="menu-group"
      {...rest}
    />
  )
}
