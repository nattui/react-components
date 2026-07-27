import { Combobox as BaseCombobox } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./combobox-list.module.css"

export interface ComboboxListProps extends Omit<BaseCombobox.List.Props, "className"> {
  className?: string
}

export function ComboboxList(props: ComboboxListProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = comboboxListVariants({ className: customClassName })

  return <BaseCombobox.List className={combinedClassName} data-slot="combobox-list" {...rest} />
}

export const comboboxListVariants = cva(styles.base)
