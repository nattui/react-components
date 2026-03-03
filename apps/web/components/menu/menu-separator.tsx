import { Menu as MenuPrimitive } from "@base-ui/react"

export function MenuSeparator(props: MenuPrimitive.Separator.Props) {
  const { className, ...rest } = props

  return (
    <MenuPrimitive.Separator
      className={`bg-border -mx-1 my-1 h-px ${className}`}
      data-slot="menu-separator"
      {...rest}
    />
  )
}
