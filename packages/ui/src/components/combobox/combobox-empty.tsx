import { Combobox as BaseCombobox } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./combobox-empty.module.css"

export interface ComboboxEmptyProps extends Omit<BaseCombobox.Empty.Props, "className"> {
  className?: string
}

export function ComboboxEmpty(props: ComboboxEmptyProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = comboboxEmptyVariants({ className: customClassName })

  return <BaseCombobox.Empty className={combinedClassName} data-slot="combobox-empty" {...rest} />
}

export const comboboxEmptyVariants = cva(styles.base)
