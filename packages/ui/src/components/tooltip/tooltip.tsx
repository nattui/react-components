import { Tooltip as BaseTooltip } from "@base-ui/react"
import type { JSX } from "react"

export interface TooltipProps extends Omit<BaseTooltip.Root.Props, "disabled"> {
  isDisabled?: BaseTooltip.Root.Props["disabled"]
  isDisableHoverablePopup?: BaseTooltip.Root.Props["disableHoverablePopup"]
}

export function Tooltip(props: TooltipProps): JSX.Element {
  const { isDisabled = false, isDisableHoverablePopup = true, ...rest } = props

  return (
    <BaseTooltip.Root
      data-slot="tooltip"
      disabled={isDisabled}
      disableHoverablePopup={isDisableHoverablePopup}
      {...rest}
    />
  )
}
