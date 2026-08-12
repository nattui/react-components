import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface ComboboxGroupProps extends Omit<BaseCombobox.Group.Props, "className"> {
  className?: string
}

export function ComboboxGroup(props: ComboboxGroupProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseCombobox.Group
      className={cn(sx(pickerGroupStyles.base), customClassName)}
      data-slot="combobox-group"
      {...rest}
    />
  )
}
