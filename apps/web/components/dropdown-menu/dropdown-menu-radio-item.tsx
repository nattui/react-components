import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuRadioItemProps extends MenuPrimitive.RadioItem.Props {
  inset?: boolean
}

export function DropdownMenuRadioItem(props: DropdownMenuRadioItemProps) {
  const { className, children, inset, ...rest } = props

  return (
    <MenuPrimitive.RadioItem
      className={`focus:bg-gray-3 focus:text-gray-12 focus:**:text-gray-12 relative flex cursor-default items-center gap-6 rounded-6 py-4 pr-32 pl-6 text-14 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-28 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-16 ${className}`}
      data-inset={inset}
      data-slot="dropdown-menu-radio-item"
      {...rest}
    >
      <span
        className="pointer-events-none absolute right-8 flex items-center justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>{/* <CheckIcon /> */}</MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}
