import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface MenuGroupLabelProps extends Omit<BaseMenu.GroupLabel.Props, "className"> {
  className?: string
}

export function MenuGroupLabel(props: MenuGroupLabelProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseMenu.GroupLabel
      className={cn(pickerGroupStyles.label, customClassName)}
      data-slot="menu-group-label"
      {...rest}
    />
  )
}
