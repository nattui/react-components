import { Menu as MenuPrimitive } from "@base-ui/react"
import type { JSX } from "react"

interface DropdownMenuLabelProps extends MenuPrimitive.GroupLabel.Props {
  inset?: boolean
}

export function DropdownMenuLabel(props: DropdownMenuLabelProps): JSX.Element {
  const { className = "", inset, ...rest } = props

  return (
    <MenuPrimitive.GroupLabel
      className={`
        px-6 py-4 text-12 font-500 text-gray-11
        data-inset:pl-28
        ${className}`}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...rest}
    />
  )
}
