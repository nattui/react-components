import { Menu as BaseMenu } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "../picker/picker-group.module.css"

export interface MenuRadioGroupProps extends Omit<
  BaseMenu.RadioGroup.Props,
  "className" | "disabled"
> {
  className?: string
  isDisabled?: BaseMenu.RadioGroup.Props["disabled"]
}

export function MenuRadioGroup(props: MenuRadioGroupProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = menuRadioGroupVariants({ className: customClassName })

  return (
    <BaseMenu.RadioGroup
      className={combinedClassName}
      data-slot="menu-radio-group"
      disabled={isDisabled}
      {...rest}
    />
  )
}

export const menuRadioGroupVariants = cva(styles.base)
