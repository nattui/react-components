import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"

export interface ComboboxProps<
  Value,
  Multiple extends boolean | undefined = false,
> extends BaseCombobox.Root.Props<Value, Multiple> {}

export function Combobox<Value, Multiple extends boolean | undefined = false>(
  props: ComboboxProps<Value, Multiple>,
): JSX.Element {
  const { ...rest } = props

  return <BaseCombobox.Root data-component="combobox" {...rest} />
}
