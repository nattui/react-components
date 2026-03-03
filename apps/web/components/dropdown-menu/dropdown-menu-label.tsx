import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuLabelProps extends MenuPrimitive.GroupLabel.Props {
  inset?: boolean
}

export function DropdownMenuLabel(props: DropdownMenuLabelProps) {
  const { className, inset, ...rest } = props

  return (
    <MenuPrimitive.GroupLabel
      className={`text-gray-11 text-12 font-500 px-6 py-4 data-inset:pl-28 ${className}`}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...rest}
    />
  )
}
