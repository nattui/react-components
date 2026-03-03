import { Menu as MenuPrimitive } from "@base-ui/react"

export function MenuRadioGroup(props: MenuPrimitive.RadioGroup.Props) {
  const { ...rest } = props

  return <MenuPrimitive.RadioGroup data-slot="menu-radio-group" {...rest} />
}
