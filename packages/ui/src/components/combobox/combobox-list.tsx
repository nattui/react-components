import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerListStyles } from "../picker/picker-list.stylex"

export interface ComboboxListProps extends Omit<BaseCombobox.List.Props, "className"> {
  className?: string
}

export function ComboboxList(props: ComboboxListProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseCombobox.List
      className={cn(pickerListStyles.base, customClassName)}
      data-slot="combobox-list"
      {...rest}
    />
  )
}
