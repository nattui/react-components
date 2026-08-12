import { Toggle as BaseToggle } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { toggleGroupItemStyles } from "./toggle-group-item.stylex"

export interface ToggleGroupItemProps extends BaseToggle.Props {}

export function ToggleGroupItem(props: ToggleGroupItemProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(toggleGroupItemStyles.base, className)

  return (
    <BaseToggle
      className={combinedClassName}
      data-component="toggle-group-item"
      nativeButton
      {...rest}
    />
  )
}
