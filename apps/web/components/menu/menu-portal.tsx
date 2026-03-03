import { Menu as MenuPrimitive } from "@base-ui/react"

export function MenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  const { ...rest } = props

  return <MenuPrimitive.Portal data-slot="menu-portal" {...rest} />
}
