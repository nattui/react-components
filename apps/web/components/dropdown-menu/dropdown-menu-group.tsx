import { Menu as MenuPrimitive } from "@base-ui/react"
import type { JSX } from "react"

interface DropdownMenuGroupProps extends MenuPrimitive.Group.Props {}

export function DropdownMenuGroup(props: DropdownMenuGroupProps): JSX.Element {
  const { ...rest } = props

  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...rest} />
}
