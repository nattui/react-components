import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerSeparatorStyles } from "../picker/picker-separator.stylex"

export interface SelectSeparatorProps extends Omit<BaseSelect.Separator.Props, "className"> {
  className?: string
}

export function SelectSeparator(props: SelectSeparatorProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerSeparatorStyles.base, className)

  return (
    <BaseSelect.Separator
      className={combinedClassName}
      data-component="select-separator"
      {...rest}
    />
  )
}
