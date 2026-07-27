import { Combobox as BaseCombobox } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "../picker/picker-separator.module.css"

export interface ComboboxSeparatorProps extends Omit<BaseCombobox.Separator.Props, "className"> {
  className?: string
}

export function ComboboxSeparator(props: ComboboxSeparatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = comboboxSeparatorVariants({ className: customClassName })

  return (
    <BaseCombobox.Separator
      className={combinedClassName}
      data-slot="combobox-separator"
      {...rest}
    />
  )
}

export const comboboxSeparatorVariants = cva(styles.base)
