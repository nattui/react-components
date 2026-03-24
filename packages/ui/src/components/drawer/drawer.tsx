import { Drawer as BaseDrawer } from "@base-ui/react"

export interface DrawerProps extends Omit<BaseDrawer.Root.Props, "onOpenChange" | "open"> {
  isOpen?: BaseDrawer.Root.Props["open"]
  onIsOpenChange?: BaseDrawer.Root.Props["onOpenChange"]
}

export function Drawer(props: DrawerProps) {
  const { isOpen, onIsOpenChange, ...rest } = props

  return (
    <BaseDrawer.Root
      data-slot="drawer"
      onOpenChange={onIsOpenChange}
      open={isOpen}
      swipeDirection="down"
      {...rest}
    />
  )
}
