import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface MenuRadioGroupProps extends Omit<BaseMenu.RadioGroup.Props, "className"> {
  className?: string
}

export function MenuRadioGroup(props: MenuRadioGroupProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerGroupStyles.base, className)

  return (
    <BaseMenu.RadioGroup
      className={combinedClassName}
      data-component="menu-radio-group"
      {...rest}
    />
  )
}
