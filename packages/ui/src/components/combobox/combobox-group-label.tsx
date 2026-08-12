import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface ComboboxGroupLabelProps extends Omit<BaseCombobox.GroupLabel.Props, "className"> {
  className?: string
}

export function ComboboxGroupLabel(props: ComboboxGroupLabelProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseCombobox.GroupLabel
      className={cn(sx(pickerGroupStyles.label), customClassName)}
      data-slot="combobox-group-label"
      {...rest}
    />
  )
}
