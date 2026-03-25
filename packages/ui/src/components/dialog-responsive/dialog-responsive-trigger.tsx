import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"

export interface DialogResponsiveTriggerProps extends BaseDrawer.Trigger.Props {}

export function DialogResponsiveTrigger(props: DialogResponsiveTriggerProps): JSX.Element {
  const { ...rest } = props

  return <BaseDrawer.Trigger data-slot="dialog-responsive-trigger" {...rest} />
}
