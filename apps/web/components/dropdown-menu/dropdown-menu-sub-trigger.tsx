import { Menu as MenuPrimitive } from "@base-ui/react"
import { LucideChevronRight } from "@nattstack/icons"

interface DropdownMenuSubTriggerProps extends MenuPrimitive.SubmenuTrigger.Props {
  inset?: boolean
}

export function DropdownMenuSubTrigger(props: DropdownMenuSubTriggerProps) {
  const { className = "", inset, children, ...rest } = props

  return (
    <MenuPrimitive.SubmenuTrigger
      className={`focus:bg-gray-3 focus:text-gray-12 data-open:bg-gray-3 data-open:text-gray-12 not-data-[variant=destructive]:focus:**:text-gray-12 data-popup-open:bg-gray-3 data-popup-open:text-gray-12 rounded-6 text-14 flex cursor-default items-center gap-6 px-6 py-4 outline-hidden select-none data-inset:pl-28 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-16 ${className}`}
      data-inset={inset}
      data-slot="dropdown-menu-sub-trigger"
      {...rest}
    >
      {children}
      <LucideChevronRight className="cn-rtl-flip ml-auto" size={16} />
    </MenuPrimitive.SubmenuTrigger>
  )
}
