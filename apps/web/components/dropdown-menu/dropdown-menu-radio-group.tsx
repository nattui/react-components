import { Menu as MenuPrimitive } from "@base-ui/react"
import type { JSX } from "react"

interface DropdownMenuRadioGroupProps extends MenuPrimitive.RadioGroup.Props {}

export function DropdownMenuRadioGroup(props: DropdownMenuRadioGroupProps): JSX.Element {
  const { ...rest } = props

  return <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...rest} />
}
