import { Combobox as BaseCombobox } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "../picker/picker.module.css"

export interface ComboboxGroupLabelProps extends Omit<BaseCombobox.GroupLabel.Props, "className"> {
  className?: string
}

export function ComboboxGroupLabel(props: ComboboxGroupLabelProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = comboboxGroupLabelVariants({ className: customClassName })

  return (
    <BaseCombobox.GroupLabel
      className={combinedClassName}
      data-slot="combobox-group-label"
      {...rest}
    />
  )
}

export const comboboxGroupLabelVariants = cva(styles.group_label)
