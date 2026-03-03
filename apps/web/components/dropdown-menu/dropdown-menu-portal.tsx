import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuPortalProps extends MenuPrimitive.Portal.Props {}

export function DropdownMenuPortal(props: DropdownMenuPortalProps) {
  const { ...rest } = props

  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...rest} />
}
