import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"

export interface ComboboxCollectionProps extends BaseCombobox.Collection.Props {}

export function ComboboxCollection(props: ComboboxCollectionProps): JSX.Element | null {
  const { ...rest } = props

  return <BaseCombobox.Collection {...rest} />
}
