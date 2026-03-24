import { Drawer as BaseDrawer } from "@base-ui/react"

export interface DialogResponsiveTriggerProps extends BaseDrawer.Trigger.Props {}

export function DialogResponsiveTrigger(props: DialogResponsiveTriggerProps) {
  const { ...rest } = props

  return <BaseDrawer.Trigger data-slot="dialog-responsive-trigger" {...rest} />
}
