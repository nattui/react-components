import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface ComboboxGroupLabelProps extends Omit<BaseCombobox.GroupLabel.Props, "className"> {
  className?: string
}

export function ComboboxGroupLabel(props: ComboboxGroupLabelProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerGroupStyles.label, className)

  return (
    <BaseCombobox.GroupLabel
      className={combinedClassName}
      data-component="combobox-group-label"
      {...rest}
    />
  )
}
