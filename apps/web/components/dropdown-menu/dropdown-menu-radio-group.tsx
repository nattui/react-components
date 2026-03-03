import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuRadioGroupProps extends MenuPrimitive.RadioGroup.Props {}

export function DropdownMenuRadioGroup(props: DropdownMenuRadioGroupProps) {
  const { ...rest } = props

  return <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...rest} />
}
