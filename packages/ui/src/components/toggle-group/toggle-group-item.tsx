import { Toggle as BaseToggle } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { toggleGroupItemStyles } from "./toggle-group-item.stylex"

export { toggleGroupItemStyles } from "./toggle-group-item.stylex"

export interface ToggleGroupItemProps extends Omit<BaseToggle.Props, "disabled" | "nativeButton"> {
  isDisabled?: BaseToggle.Props["disabled"]
  isNativeButton?: BaseToggle.Props["nativeButton"]
}

export function ToggleGroupItem(props: ToggleGroupItemProps): JSX.Element {
  const {
    className: customClassName = "",
    isDisabled = false,
    isNativeButton = true,
    ...rest
  } = props

  return (
    <BaseToggle
      className={cn(sx(toggleGroupItemStyles.base), customClassName)}
      data-slot="toggle-group-item"
      disabled={isDisabled}
      nativeButton={isNativeButton}
      {...rest}
    />
  )
}
