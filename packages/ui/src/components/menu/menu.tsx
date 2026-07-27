import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"

export interface MenuProps<Payload = unknown> extends BaseMenu.Root.Props<Payload> {}

export function Menu<Payload = unknown>(props: MenuProps<Payload>): JSX.Element {
  const { ...rest } = props

  return <BaseMenu.Root data-slot="menu" {...rest} />
}
