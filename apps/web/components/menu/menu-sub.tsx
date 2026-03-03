import { Menu as MenuPrimitive } from "@base-ui/react"

export function MenuSub(props: MenuPrimitive.SubmenuRoot.Props) {
  const { ...rest } = props

  return <MenuPrimitive.SubmenuRoot data-slot="menu-sub" {...rest} />
}
