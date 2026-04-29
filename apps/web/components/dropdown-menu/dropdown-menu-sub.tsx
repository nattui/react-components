import { Menu as MenuPrimitive } from "@base-ui/react"
import type { JSX } from "react"

interface DropdownMenuSubProps extends MenuPrimitive.SubmenuRoot.Props {}

export function DropdownMenuSub(props: DropdownMenuSubProps): JSX.Element {
  const { ...rest } = props

  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...rest} />
}
