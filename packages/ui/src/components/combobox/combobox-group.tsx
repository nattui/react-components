import { Combobox as BaseCombobox } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./combobox-group.module.css"

export interface ComboboxGroupProps extends Omit<BaseCombobox.Group.Props, "className"> {
  className?: string
}

export function ComboboxGroup(props: ComboboxGroupProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = comboboxGroupVariants({ className: customClassName })

  return <BaseCombobox.Group className={combinedClassName} data-slot="combobox-group" {...rest} />
}

export const comboboxGroupVariants = cva(styles.base)
