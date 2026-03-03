import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuLabelProps extends MenuPrimitive.GroupLabel.Props {
  inset?: boolean
}

export function DropdownMenuLabel(props: DropdownMenuLabelProps) {
  const { className, inset, ...rest } = props

  return (
    <MenuPrimitive.GroupLabel
      className={`text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7 ${className}`}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...rest}
    />
  )
}
