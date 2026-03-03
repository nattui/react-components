import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuSubTriggerProps extends MenuPrimitive.SubmenuTrigger.Props {
  inset?: boolean
}

export function DropdownMenuSubTrigger(props: DropdownMenuSubTriggerProps) {
  const { className, inset, children, ...rest } = props

  return (
    <MenuPrimitive.SubmenuTrigger
      className={`focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${className}`}
      data-inset={inset}
      data-slot="dropdown-menu-sub-trigger"
      {...rest}
    >
      {children}
      {/* <ChevronRightIcon className="cn-rtl-flip ml-auto" /> */}
    </MenuPrimitive.SubmenuTrigger>
  )
}
