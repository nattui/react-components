import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export interface SelectGroupProps extends Omit<BaseSelect.Group.Props, "className"> {
  className?: string
}

export function SelectGroup(props: SelectGroupProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerGroupStyles.base, className)

  return <BaseSelect.Group className={combinedClassName} data-component="select-group" {...rest} />
}
