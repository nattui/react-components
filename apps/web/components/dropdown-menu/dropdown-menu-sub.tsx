import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuSubProps extends MenuPrimitive.SubmenuRoot.Props {}

export function DropdownMenuSub(props: DropdownMenuSubProps) {
  const { ...rest } = props

  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...rest} />
}
