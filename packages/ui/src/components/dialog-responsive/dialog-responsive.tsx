import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"

export interface DialogResponsiveProps extends BaseDrawer.Root.Props {}

export function DialogResponsive(props: DialogResponsiveProps): JSX.Element {
  return <BaseDrawer.Root data-slot="dialog-responsive" swipeDirection="down" {...props} />
}
