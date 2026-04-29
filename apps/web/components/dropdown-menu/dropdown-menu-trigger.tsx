import { Menu as MenuPrimitive } from "@base-ui/react"
import type { JSX } from "react"

interface DropdownMenuTriggerProps extends MenuPrimitive.Trigger.Props {}

export function DropdownMenuTrigger(props: DropdownMenuTriggerProps): JSX.Element {
  const { ...rest } = props

  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...rest} />
}
