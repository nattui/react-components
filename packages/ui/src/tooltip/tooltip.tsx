import { Tooltip as BaseTooltip } from "@base-ui/react"

export interface TooltipProps extends BaseTooltip.Root.Props {}

export function Tooltip(props: TooltipProps) {
  const { ...rest } = props

  return <BaseTooltip.Root data-slot="tooltip" {...rest} />
}
