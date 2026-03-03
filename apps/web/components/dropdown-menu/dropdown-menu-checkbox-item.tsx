import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuCheckboxItemProps extends MenuPrimitive.CheckboxItem.Props {
  inset?: boolean
}

export function DropdownMenuCheckboxItem(props: DropdownMenuCheckboxItemProps) {
  const { className, children, checked, inset, ...rest } = props

  return (
    <MenuPrimitive.CheckboxItem
      checked={checked}
      className={`focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${className}`}
      data-inset={inset}
      data-slot="dropdown-menu-checkbox-item"
      {...rest}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          {/* <CheckIcon /> */}
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}
