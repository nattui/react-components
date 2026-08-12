import { Select as BaseSelect } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"

export { pickerItemStyles as selectItemStyles } from "../picker/picker-item.stylex"

export interface SelectItemProps extends Omit<BaseSelect.Item.Props, "className"> {
  className?: string
}

export function SelectItem(props: SelectItemProps): JSX.Element {
  const { children, className: customClassName = "", ...rest } = props

  return (
    <BaseSelect.Item
      className={cn(sx(pickerItemStyles.base), customClassName)}
      data-slot="select-item"
      {...rest}
    >
      <BaseSelect.ItemText className={sx(pickerItemStyles.label)} data-slot="select-item-text">
        {children}
      </BaseSelect.ItemText>

      <BaseSelect.ItemIndicator
        className={sx(pickerItemStyles.indicator)}
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
