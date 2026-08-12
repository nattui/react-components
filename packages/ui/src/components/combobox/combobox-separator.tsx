import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerSeparatorStyles } from "../picker/picker-separator.stylex"

export interface ComboboxSeparatorProps extends Omit<BaseCombobox.Separator.Props, "className"> {
  className?: string
}

export function ComboboxSeparator(props: ComboboxSeparatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseCombobox.Separator
      className={cn(pickerSeparatorStyles.base, customClassName)}
      data-slot="combobox-separator"
      {...rest}
    />
  )
}
