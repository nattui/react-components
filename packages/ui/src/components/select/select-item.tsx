import { Select as BaseSelect } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "./select-item.module.css"

export interface SelectItemProps extends Omit<BaseSelect.Item.Props, "className" | "disabled"> {
  className?: string
  isDisabled?: BaseSelect.Item.Props["disabled"]
}

export function SelectItem(props: SelectItemProps): JSX.Element {
  const { children, className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = selectItemVariants({ className: customClassName })

  return (
    <BaseSelect.Item
      className={combinedClassName}
      data-slot="select-item"
      disabled={isDisabled}
      {...rest}
    >
      <BaseSelect.ItemText className={styles.select_item__label} data-slot="select-item-text">
        {children}
      </BaseSelect.ItemText>

      <BaseSelect.ItemIndicator
        className={styles.select_item__indicator}
        data-slot="select-item-indicator"
      >
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
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  )
}

export const selectItemVariants = cva(styles.select_item)
