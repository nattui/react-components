import { Menu as BaseMenu } from "@base-ui/react"
import { cx } from "class-variance-authority"
import type { JSX, ReactNode } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"

export interface MenuCheckboxItemProps extends Omit<
  BaseMenu.CheckboxItem.Props,
  "checked" | "className" | "defaultChecked" | "disabled"
> {
  className?: string
  iconEnd?: ReactNode
  indicator?: ReactNode
  isChecked?: BaseMenu.CheckboxItem.Props["checked"]
  isDefaultChecked?: BaseMenu.CheckboxItem.Props["defaultChecked"]
  isDisabled?: BaseMenu.CheckboxItem.Props["disabled"]
}

export function MenuCheckboxItem(props: MenuCheckboxItemProps): JSX.Element {
  const {
    children,
    className: customClassName = "",
    iconEnd = undefined,
    indicator = undefined,
    isChecked = undefined,
    isDefaultChecked = false,
    isDisabled = false,
    ...rest
  } = props

  const combinedClassName = cx(MENU_CLASS_NAME.CHECKBOX_ITEM, customClassName)
  const currentIndicator = indicator ?? (
    <svg height="14px" viewBox="0 0 18 18" width="14px" xmlns="http://www.w3.org/2000/svg">
      <polyline
        fill="none"
        points="2.75 9.25 6.75 14.25 15.25 3.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )

  return (
    <BaseMenu.CheckboxItem
      checked={isChecked}
      className={combinedClassName}
      data-slot="menu-checkbox-item"
      defaultChecked={isDefaultChecked}
      disabled={isDisabled}
      {...rest}
    >
      <BaseMenu.CheckboxItemIndicator className={MENU_CLASS_NAME.ITEM_INDICATOR}>
        {currentIndicator}
      </BaseMenu.CheckboxItemIndicator>
      <span className={MENU_CLASS_NAME.ITEM_LABEL}>{children}</span>
      {iconEnd && <span className={MENU_CLASS_NAME.ITEM_ICON}>{iconEnd}</span>}
    </BaseMenu.CheckboxItem>
  )
}
