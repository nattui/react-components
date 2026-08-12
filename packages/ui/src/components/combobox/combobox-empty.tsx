import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { comboboxEmptyStyles } from "./combobox-empty.stylex"

export { comboboxEmptyStyles } from "./combobox-empty.stylex"

export interface ComboboxEmptyProps extends Omit<BaseCombobox.Empty.Props, "className"> {
  className?: string
}

export function ComboboxEmpty(props: ComboboxEmptyProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseCombobox.Empty
      className={cn(sx(comboboxEmptyStyles.base), customClassName)}
      data-slot="combobox-empty"
      {...rest}
    />
  )
}
