import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerSeparatorStyles } from "../picker/picker-separator.stylex"

export { pickerSeparatorStyles as selectSeparatorStyles } from "../picker/picker-separator.stylex"

export interface SelectSeparatorProps extends Omit<BaseSelect.Separator.Props, "className"> {
  className?: string
}

export function SelectSeparator(props: SelectSeparatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseSelect.Separator
      className={cn(pickerSeparatorStyles.base, customClassName)}
      data-slot="select-separator"
      {...rest}
    />
  )
}
