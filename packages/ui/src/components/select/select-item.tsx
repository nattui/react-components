import { Select as BaseSelect } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX, ReactNode } from "react"
import styles from "./select-item.module.css"

export interface SelectItemProps extends Omit<BaseSelect.Item.Props, "className" | "disabled"> {
  className?: string
  indicator?: ReactNode
  isDisabled?: BaseSelect.Item.Props["disabled"]
}

export function SelectItem(props: SelectItemProps): JSX.Element {
  const {
    children,
    className: customClassName = "",
    indicator = undefined,
    isDisabled = false,
    ...rest
  } = props

  const combinedClassName = selectItemVariants({ className: customClassName })

  const currentIndicator = indicator ?? (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path
        d="M3.35 9.25L6.15 12L12.65 4.65"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )

  return (
    <BaseSelect.Item
      className={combinedClassName}
      data-slot="select-item"
      disabled={isDisabled}
      {...rest}
    >
      <BaseSelect.ItemIndicator
        className={styles.select_item__indicator}
        data-slot="select-item-indicator"
      >
        {currentIndicator}
      </BaseSelect.ItemIndicator>
      <BaseSelect.ItemText className={styles.select_item__label} data-slot="select-item-text">
        {children}
      </BaseSelect.ItemText>
    </BaseSelect.Item>
  )
}

export const selectItemVariants = cva(styles.select_item)
