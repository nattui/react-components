import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuTriggerProps extends MenuPrimitive.Trigger.Props {}

export function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  const { ...rest } = props

  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...rest} />
}
