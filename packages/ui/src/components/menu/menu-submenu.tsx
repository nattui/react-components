import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"

export interface MenuSubmenuProps extends BaseMenu.SubmenuRoot.Props {}

export function MenuSubmenu(props: MenuSubmenuProps): JSX.Element {
  const { ...rest } = props

  return <BaseMenu.SubmenuRoot data-slot="menu-submenu" {...rest} />
}
