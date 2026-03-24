import { Drawer as BaseDrawer } from "@base-ui/react"

export interface DrawerTriggerProps extends BaseDrawer.Trigger.Props {}

export function DrawerTrigger(props: DrawerTriggerProps) {
  const { ...rest } = props

  return <BaseDrawer.Trigger data-slot="drawer-trigger" {...rest} />
}
