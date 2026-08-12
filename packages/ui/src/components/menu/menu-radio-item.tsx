import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"

export interface MenuRadioItemProps extends Omit<
  BaseMenu.RadioItem.Props,
  "className" | "disabled"
> {
  className?: string
  isDisabled?: BaseMenu.RadioItem.Props["disabled"]
}

export function MenuRadioItem(props: MenuRadioItemProps): JSX.Element {
  const { children, className: customClassName = "", isDisabled = false, ...rest } = props

  return (
    <BaseMenu.RadioItem
      className={cn(sx(pickerItemStyles.base), customClassName)}
      data-slot="menu-radio-item"
      disabled={isDisabled}
      {...rest}
    >
      <span className={sx(pickerItemStyles.label)} data-slot="menu-radio-item-text">
        {children}
      </span>

      <BaseMenu.RadioItemIndicator
        className={sx(pickerItemStyles.indicator)}
        data-slot="menu-radio-item-indicator"
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
      </BaseMenu.RadioItemIndicator>
    </BaseMenu.RadioItem>
  )
}
