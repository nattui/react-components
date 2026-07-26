import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"

export interface SelectProps extends BaseSelect.Root.Props<string, boolean> {}

export function Select(props: SelectProps): JSX.Element {
  const { ...rest } = props

  return <BaseSelect.Root data-slot="select" {...rest} />
}
