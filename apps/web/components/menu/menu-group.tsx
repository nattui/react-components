import { Menu as MenuPrimitive } from "@base-ui/react"

export function MenuGroup(props: MenuPrimitive.Group.Props) {
  const { ...rest } = props

  return <MenuPrimitive.Group data-slot="menu-group" {...rest} />
}
