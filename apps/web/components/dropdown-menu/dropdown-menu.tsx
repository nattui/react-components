import { Menu as MenuPrimitive } from "@base-ui/react"
import type { JSX } from "react"

interface DropdownMenuProps extends MenuPrimitive.Root.Props {}

export function DropdownMenu(props: DropdownMenuProps): JSX.Element {
  const { ...rest } = props

  return <MenuPrimitive.Root data-slot="dropdown-menu" {...rest} />
}
