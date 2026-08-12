import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { comboboxEmptyStyles } from "./combobox-empty.stylex"

export { comboboxEmptyStyles } from "./combobox-empty.stylex"

export interface ComboboxEmptyProps extends Omit<BaseCombobox.Empty.Props, "className"> {
  className?: string
}

export function ComboboxEmpty(props: ComboboxEmptyProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseCombobox.Empty
      className={cn(comboboxEmptyStyles.base, customClassName)}
      data-slot="combobox-empty"
      {...rest}
    />
  )
}
