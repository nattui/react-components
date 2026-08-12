import { Tooltip as BaseTooltip } from "@base-ui/react"
import type { JSX } from "react"

export interface TooltipProps extends BaseTooltip.Root.Props {}

export function Tooltip(props: TooltipProps): JSX.Element {
  return <BaseTooltip.Root data-slot="tooltip" disableHoverablePopup {...props} />
}
