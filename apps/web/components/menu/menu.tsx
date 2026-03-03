import { Menu as MenuPrimitive } from "@base-ui/react"

export function Menu(props: MenuPrimitive.Root.Props) {
  const { ...rest } = props

  return <MenuPrimitive.Root data-slot="menu" {...rest} />
}
