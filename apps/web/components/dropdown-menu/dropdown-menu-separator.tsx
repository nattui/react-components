import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuSeparatorProps extends MenuPrimitive.Separator.Props {}

export function DropdownMenuSeparator(props: DropdownMenuSeparatorProps) {
  const { className = "", ...rest } = props

  return (
    <MenuPrimitive.Separator
      className={`bg-gray-6 -mx-4 my-4 h-1 ${className}`}
      data-slot="dropdown-menu-separator"
      {...rest}
    />
  )
}
