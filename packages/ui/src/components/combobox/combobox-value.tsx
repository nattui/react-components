import { Combobox as BaseCombobox } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX, ReactNode } from "react"
import styles from "./combobox-value.module.css"

export interface ComboboxValueProps extends BaseCombobox.Value.Props {
  className?: string
}

export function ComboboxValue(props: ComboboxValueProps): JSX.Element {
  const {
    children = undefined,
    className: customClassName = "",
    placeholder = undefined,
    ...rest
  } = props

  const combinedClassName = comboboxValueVariants({ className: customClassName })

  /* Base UI calls function children even when nothing is selected (with a
     null value), so fall back to the placeholder for empty values ourselves. */
  const resolvedChildren: BaseCombobox.Value.Props["children"] =
    typeof children === "function"
      ? (selectedValue: unknown): ReactNode =>
          (selectedValue ?? undefined) === undefined ? placeholder : children(selectedValue)
      : children

  return (
    <div className={combinedClassName} data-slot="combobox-value">
      <BaseCombobox.Value placeholder={placeholder} {...rest}>
        {resolvedChildren}
      </BaseCombobox.Value>
    </div>
  )
}

export const comboboxValueVariants = cva(styles.base)
