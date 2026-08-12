import { ToggleGroup as BaseToggleGroup } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { toggleGroupStyles } from "./toggle-group.stylex"

export interface ToggleGroupProps extends BaseToggleGroup.Props {}

export function ToggleGroup(props: ToggleGroupProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(toggleGroupStyles.base, className)

  return (
    <BaseToggleGroup
      className={combinedClassName}
      data-component="toggle-group"
      loopFocus
      {...rest}
    />
  )
}
