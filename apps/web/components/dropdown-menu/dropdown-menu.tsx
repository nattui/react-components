import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuProps extends MenuPrimitive.Root.Props {}

export function DropdownMenu(props: DropdownMenuProps) {
  const { ...rest } = props

  return <MenuPrimitive.Root data-slot="dropdown-menu" {...rest} />
}
