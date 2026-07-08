import { Toggle as BaseToggle } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./toggle-group-item.module.css"

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

  const combinedClassName = toggleGroupItemVariants({ className: customClassName })

  return (
    <BaseToggle
      className={combinedClassName}
      data-slot="toggle-group-item"
      disabled={isDisabled}
      nativeButton={isNativeButton}
      {...rest}
    />
  )
}

export const toggleGroupItemVariants = cva(styles.toggle_group_item)
