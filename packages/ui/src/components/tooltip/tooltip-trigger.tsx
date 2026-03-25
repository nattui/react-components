import { Tooltip as BaseTooltip } from "@base-ui/react"
import type { JSX } from "react"

export interface TooltipTriggerProps extends BaseTooltip.Trigger.Props {}

export function TooltipTrigger(props: TooltipTriggerProps): JSX.Element {
  const { ...rest } = props

  return <BaseTooltip.Trigger data-slot="tooltip-trigger" {...rest} />
}
