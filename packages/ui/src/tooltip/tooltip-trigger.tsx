import { Tooltip as BaseTooltip } from "@base-ui/react"

export interface TooltipTriggerProps extends BaseTooltip.Trigger.Props {}

export function TooltipTrigger(props: TooltipTriggerProps) {
  const { ...rest } = props

  return <BaseTooltip.Trigger data-slot="tooltip-trigger" {...rest} />
}
