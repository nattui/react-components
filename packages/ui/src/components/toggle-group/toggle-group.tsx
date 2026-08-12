import { ToggleGroup as BaseToggleGroup } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { toggleGroupStyles } from "./toggle-group.stylex"

export { toggleGroupStyles } from "./toggle-group.stylex"

export interface ToggleGroupProps extends Omit<
  BaseToggleGroup.Props,
  "disabled" | "loopFocus" | "multiple"
> {
  isDisabled?: BaseToggleGroup.Props["disabled"]
  isLoopFocus?: BaseToggleGroup.Props["loopFocus"]
  isMultiple?: BaseToggleGroup.Props["multiple"]
}

export function ToggleGroup(props: ToggleGroupProps): JSX.Element {
  const {
    className: customClassName = "",
    isDisabled = false,
    isLoopFocus = true,
    isMultiple = false,
    ...rest
  } = props

  return (
    <BaseToggleGroup
      className={cn(sx(toggleGroupStyles.base), customClassName)}
      data-slot="toggle-group"
      disabled={isDisabled}
      loopFocus={isLoopFocus}
      multiple={isMultiple}
      {...rest}
    />
  )
}
