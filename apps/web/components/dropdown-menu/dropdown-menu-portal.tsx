import { Menu as MenuPrimitive } from "@base-ui/react"
import type { JSX } from "react"

interface DropdownMenuPortalProps extends MenuPrimitive.Portal.Props {}

export function DropdownMenuPortal(props: DropdownMenuPortalProps): JSX.Element {
  const { ...rest } = props

  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...rest} />
}
