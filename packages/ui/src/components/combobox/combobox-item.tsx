import { Combobox as BaseCombobox } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./combobox-item.module.css"

export interface ComboboxItemProps extends Omit<BaseCombobox.Item.Props, "className" | "disabled"> {
  className?: string
  isDisabled?: BaseCombobox.Item.Props["disabled"]
}

export function ComboboxItem(props: ComboboxItemProps): JSX.Element {
  const { children, className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = comboboxItemVariants({ className: customClassName })

  return (
    <BaseCombobox.Item
      className={combinedClassName}
      data-slot="combobox-item"
      disabled={isDisabled}
      {...rest}
    >
      <span className={styles.label} data-slot="combobox-item-text">
        {children}
      </span>

      <BaseCombobox.ItemIndicator className={styles.indicator} data-slot="combobox-item-indicator">
        {/* check */}
        <svg
          height="14px"
          viewBox="0 0 18 18"
          width="14px"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
          y="0px"
        >
          <polyline
            fill="none"
            points="2.75 9.25 6.75 14.25 15.25 3.75"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </BaseCombobox.ItemIndicator>
    </BaseCombobox.Item>
  )
}

export const comboboxItemVariants = cva(styles.base)
