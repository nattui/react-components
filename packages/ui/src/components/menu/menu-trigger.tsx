import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"

export interface MenuTriggerProps<Payload = unknown> extends BaseMenu.Trigger.Props<Payload> {}

/* The trigger ships unstyled: compose it with an existing button
   through the `render` prop, e.g.
   `<MenuTrigger render={<Button label="Options" />} />`. */
export function MenuTrigger<Payload = unknown>(props: MenuTriggerProps<Payload>): JSX.Element {
  const { ...rest } = props

  return <BaseMenu.Trigger data-component="menu-trigger" {...rest} />
}
