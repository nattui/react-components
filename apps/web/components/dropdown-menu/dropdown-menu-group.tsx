import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuGroupProps extends MenuPrimitive.Group.Props {}

export function DropdownMenuGroup(props: DropdownMenuGroupProps) {
  const { ...rest } = props

  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...rest} />
}
