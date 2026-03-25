import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"

export interface DialogResponsiveProps extends Omit<
  BaseDrawer.Root.Props,
  "onOpenChange" | "open"
> {
  isOpen?: BaseDrawer.Root.Props["open"]
  onIsOpenChange?: BaseDrawer.Root.Props["onOpenChange"]
}

export function DialogResponsive(props: DialogResponsiveProps): JSX.Element {
  const { isOpen, onIsOpenChange, ...rest } = props

  return (
    <BaseDrawer.Root
      data-slot="dialog-responsive"
      onOpenChange={onIsOpenChange}
      open={isOpen}
      swipeDirection="down"
      {...rest}
    />
  )
}
