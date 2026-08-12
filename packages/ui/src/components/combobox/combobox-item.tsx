import { Combobox as BaseCombobox } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"

export interface ComboboxItemProps extends Omit<BaseCombobox.Item.Props, "className"> {
  className?: string
}

export function ComboboxItem(props: ComboboxItemProps): JSX.Element {
  const { children, className = "", ...rest } = props

  const combinedClassName = cn(pickerItemStyles.base, className)

  return (
    <BaseCombobox.Item className={combinedClassName} data-component="combobox-item" {...rest}>
      <span className={cn(pickerItemStyles.label)} data-component="combobox-item-text">
        {children}
      </span>

      <BaseCombobox.ItemIndicator
        className={cn(pickerItemStyles.indicator)}
        data-component="combobox-item-indicator"
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
      </BaseCombobox.ItemIndicator>
    </BaseCombobox.Item>
  )
}
