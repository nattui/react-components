import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuSeparatorProps extends MenuPrimitive.Separator.Props {}

export function DropdownMenuSeparator(props: DropdownMenuSeparatorProps) {
  const { className, ...rest } = props

  return (
    <MenuPrimitive.Separator
      className={`bg-border -mx-1 my-1 h-px ${className}`}
      data-slot="dropdown-menu-separator"
      {...rest}
    />
  )
}
