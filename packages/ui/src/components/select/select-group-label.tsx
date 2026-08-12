import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface SelectGroupLabelProps extends Omit<BaseSelect.GroupLabel.Props, "className"> {
  className?: string
}

export function SelectGroupLabel(props: SelectGroupLabelProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerGroupStyles.label, className)

  return (
    <BaseSelect.GroupLabel
      className={combinedClassName}
      data-component="select-group-label"
      {...rest}
    />
  )
}
