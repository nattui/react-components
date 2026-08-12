import { ToggleGroup as BaseToggleGroup } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { toggleGroupStyles } from "./toggle-group.stylex"

export { toggleGroupStyles } from "./toggle-group.stylex"

export interface ToggleGroupProps extends BaseToggleGroup.Props {}

export function ToggleGroup(props: ToggleGroupProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseToggleGroup
      className={cn(toggleGroupStyles.base, customClassName)}
      data-slot="toggle-group"
      loopFocus
      {...rest}
    />
  )
}
