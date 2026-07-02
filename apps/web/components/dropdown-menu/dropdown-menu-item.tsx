import { Menu as MenuPrimitive } from "@base-ui/react"
import type { JSX } from "react"

interface DropdownMenuItemProps extends MenuPrimitive.Item.Props {
  inset?: boolean
  variant?: "default" | "destructive"
}

export function DropdownMenuItem(props: DropdownMenuItemProps): JSX.Element {
  const { className = "", inset, variant = "default", ...rest } = props

  return (
    <MenuPrimitive.Item
      className={`
        data-[variant=destructive]:text-red-11
        data-[variant=destructive]:focus:bg-red-3
        data-[variant=destructive]:focus:text-red-11
        data-[variant=destructive]:*:[svg]:text-red-11
        group/dropdown-menu-item relative flex h-40 cursor-pointer items-center
        gap-x-12 rounded-6 px-12 text-14 font-500 outline-hidden select-none
        focus:bg-gray-3 focus:text-gray-12
        not-data-[variant=destructive]:focus:**:text-gray-12
        data-disabled:pointer-events-none data-disabled:opacity-50
        data-inset:pl-28
        [&_svg]:pointer-events-none [&_svg]:shrink-0
        ${className}`}
      data-inset={inset}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      {...rest}
    />
  )
}
