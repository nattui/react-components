import { Menu as MenuPrimitive } from "@base-ui/react"

export function MenuTrigger(props: MenuPrimitive.Trigger.Props) {
  const { ...rest } = props

  return <MenuPrimitive.Trigger data-slot="menu-trigger" {...rest} />
}
