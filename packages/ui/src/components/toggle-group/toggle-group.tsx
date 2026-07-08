import { ToggleGroup as BaseToggleGroup } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./toggle-group.module.css"

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

  const combinedClassName = toggleGroupVariants({ className: customClassName })

  return (
    <BaseToggleGroup
      className={combinedClassName}
      data-slot="toggle-group"
      disabled={isDisabled}
      loopFocus={isLoopFocus}
      multiple={isMultiple}
      {...rest}
    />
  )
}

export const toggleGroupVariants = cva(styles.toggle_group)
