import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerGroupStyles } from "../picker/picker-group.stylex"

export { pickerGroupStyles as selectGroupStyles } from "../picker/picker-group.stylex"

export interface SelectGroupProps extends Omit<BaseSelect.Group.Props, "className"> {
  className?: string
}

export function SelectGroup(props: SelectGroupProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseSelect.Group
      className={cn(pickerGroupStyles.base, customClassName)}
      data-slot="select-group"
      {...rest}
    />
  )
}
