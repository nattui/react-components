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
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2" />
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
