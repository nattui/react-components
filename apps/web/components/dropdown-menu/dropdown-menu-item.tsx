import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuItemProps extends MenuPrimitive.Item.Props {
  inset?: boolean
  variant?: "default" | "destructive"
}

export function DropdownMenuItem(props: DropdownMenuItemProps) {
  const { className, inset, variant = "default", ...rest } = props

  return (
    <MenuPrimitive.Item
      className={`focus:bg-gray-3 focus:text-gray-12 data-[variant=destructive]:text-red-11 data-[variant=destructive]:focus:bg-red-3 data-[variant=destructive]:focus:text-red-11 data-[variant=destructive]:*:[svg]:text-red-11 not-data-[variant=destructive]:focus:**:text-gray-12 group/dropdown-menu-item relative flex cursor-default items-center gap-6 rounded-6 px-6 py-4 text-14 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-28 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-16 ${className}`}
      data-inset={inset}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      {...rest}
    />
  )
}
