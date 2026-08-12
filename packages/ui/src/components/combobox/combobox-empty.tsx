import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { comboboxEmptyStyles } from "./combobox-empty.stylex"

export interface ComboboxEmptyProps extends Omit<BaseCombobox.Empty.Props, "className"> {
  className?: string
}

export function ComboboxEmpty(props: ComboboxEmptyProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(comboboxEmptyStyles.base, className)

  return (
    <BaseCombobox.Empty className={combinedClassName} data-component="combobox-empty" {...rest} />
  )
}
