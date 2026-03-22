import { Tooltip as BaseTooltip } from "@base-ui/react"

export interface TooltipProviderProps extends BaseTooltip.Provider.Props {}

export function TooltipProvider(props: TooltipProviderProps) {
  const { ...rest } = props

  return <BaseTooltip.Provider data-slot="tooltip-provider" {...rest} />
}
