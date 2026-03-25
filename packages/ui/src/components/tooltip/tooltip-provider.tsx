import { Tooltip as BaseTooltip } from "@base-ui/react"
import type { JSX } from "react"

export interface TooltipProviderProps extends BaseTooltip.Provider.Props {}

export function TooltipProvider(props: TooltipProviderProps): JSX.Element {
  const { ...rest } = props

  return <BaseTooltip.Provider data-slot="tooltip-provider" {...rest} />
}
