import { Menu as MenuPrimitive } from "@base-ui/react"
import { LucideCheck } from "@nattstack/icons"

interface DropdownMenuCheckboxItemProps extends MenuPrimitive.CheckboxItem.Props {
  inset?: boolean
}

export function DropdownMenuCheckboxItem(props: DropdownMenuCheckboxItemProps) {
  const { className = "", children, checked, inset, ...rest } = props

  return (
    <MenuPrimitive.CheckboxItem
      checked={checked}
      className={`focus:bg-gray-3 focus:text-gray-12 focus:**:text-gray-12 rounded-6 text-14 relative flex cursor-default items-center gap-6 py-4 pr-32 pl-6 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-28 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-16 ${className}`}
      data-inset={inset}
      data-slot="dropdown-menu-checkbox-item"
      {...rest}
    >
      <span
        className="pointer-events-none absolute right-8 flex items-center justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <LucideCheck size={16} />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}
