import { Drawer as BaseDrawer } from "@base-ui/react"

export interface DrawerProps extends BaseDrawer.Root.Props {}

export function Drawer(props: DrawerProps) {
  const { ...rest } = props

  return <BaseDrawer.Root data-slot="drawer" swipeDirection="down" {...rest} />
}
