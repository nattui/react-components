import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface MenuGroupLabelProps extends Omit<BaseMenu.GroupLabel.Props, "className"> {
  className?: string
}

export function MenuGroupLabel(props: MenuGroupLabelProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerGroupStyles.label, className)

  return (
    <BaseMenu.GroupLabel
      className={combinedClassName}
      data-component="menu-group-label"
      {...rest}
    />
  )
}
