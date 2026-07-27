import { Combobox as BaseCombobox } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./combobox-search.module.css"

export interface ComboboxSearchProps extends Omit<
  BaseCombobox.Input.Props,
  "className" | "disabled" | "size"
> {
  className?: string
  isDisabled?: BaseCombobox.Input.Props["disabled"]
}

export function ComboboxSearch(props: ComboboxSearchProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = comboboxSearchVariants({ className: customClassName })

  return (
    <BaseCombobox.Input
      className={combinedClassName}
      data-slot="combobox-search"
      disabled={isDisabled}
      {...rest}
    />
  )
}

export const comboboxSearchVariants = cva(styles.base)
