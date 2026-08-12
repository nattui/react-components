import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerListStyles } from "../picker/picker-list.stylex"

export interface ComboboxListProps extends Omit<BaseCombobox.List.Props, "className"> {
  className?: string
}

export function ComboboxList(props: ComboboxListProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerListStyles.base, className)

  return (
    <BaseCombobox.List className={combinedClassName} data-component="combobox-list" {...rest} />
  )
}
