import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface MenuRadioGroupProps extends Omit<BaseMenu.RadioGroup.Props, "className"> {
  className?: string
}

export function MenuRadioGroup(props: MenuRadioGroupProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseMenu.RadioGroup
      className={cn(pickerGroupStyles.base, customClassName)}
      data-slot="menu-radio-group"
      {...rest}
    />
  )
}
