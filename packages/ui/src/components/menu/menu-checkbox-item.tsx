import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"

export interface MenuCheckboxItemProps extends Omit<
  BaseMenu.CheckboxItem.Props,
  "checked" | "className" | "defaultChecked" | "disabled"
> {
  className?: string
  isChecked?: BaseMenu.CheckboxItem.Props["checked"]
  isDefaultChecked?: BaseMenu.CheckboxItem.Props["defaultChecked"]
  isDisabled?: BaseMenu.CheckboxItem.Props["disabled"]
}

export function MenuCheckboxItem(props: MenuCheckboxItemProps): JSX.Element {
  const {
    children,
    className: customClassName = "",
    isChecked = undefined,
    isDefaultChecked = false,
    isDisabled = false,
    ...rest
  } = props

  return (
    <BaseMenu.CheckboxItem
      checked={isChecked}
      className={cn(sx(pickerItemStyles.base), customClassName)}
      data-slot="menu-checkbox-item"
      defaultChecked={isDefaultChecked}
      disabled={isDisabled}
      {...rest}
    >
      <span className={sx(pickerItemStyles.label)} data-slot="menu-checkbox-item-text">
        {children}
      </span>

      <BaseMenu.CheckboxItemIndicator
        className={sx(pickerItemStyles.indicator)}
        data-slot="menu-checkbox-item-indicator"
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
      </BaseMenu.CheckboxItemIndicator>
    </BaseMenu.CheckboxItem>
  )
}
