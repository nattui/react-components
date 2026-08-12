import { Toggle as BaseToggle } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { toggleGroupItemStyles } from "./toggle-group-item.stylex"

export { toggleGroupItemStyles } from "./toggle-group-item.stylex"

export interface ToggleGroupItemProps extends BaseToggle.Props {}

export function ToggleGroupItem(props: ToggleGroupItemProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseToggle
      className={cn(sx(toggleGroupItemStyles.base), customClassName)}
      data-slot="toggle-group-item"
      nativeButton
      {...rest}
    />
  )
}
