import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"

export interface SelectProps<Value, Multiple extends boolean | undefined = false> extends BaseSelect
  .Root.Props<Value, Multiple> {}

export function Select<Value, Multiple extends boolean | undefined = false>(
  props: SelectProps<Value, Multiple>,
): JSX.Element {
  const { ...rest } = props

  return <BaseSelect.Root data-slot="select" {...rest} />
}
