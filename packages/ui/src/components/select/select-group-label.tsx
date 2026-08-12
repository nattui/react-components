import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface SelectGroupLabelProps extends Omit<BaseSelect.GroupLabel.Props, "className"> {
  className?: string
}

export function SelectGroupLabel(props: SelectGroupLabelProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseSelect.GroupLabel
      className={cn(pickerGroupStyles.label, customClassName)}
      data-slot="select-group-label"
      {...rest}
    />
  )
}
