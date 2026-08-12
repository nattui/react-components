import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"

export interface DialogResponsiveProps extends BaseDrawer.Root.Props {}

export function DialogResponsive(props: DialogResponsiveProps): JSX.Element {
  const { ...rest } = props

  return <BaseDrawer.Root data-component="dialog-responsive" swipeDirection="down" {...rest} />
}
