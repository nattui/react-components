import { Menu as BaseMenu } from "@base-ui/react"
import { cx } from "class-variance-authority"
import type { JSX, ReactNode } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"

export interface MenuRadioItemProps extends Omit<
  BaseMenu.RadioItem.Props,
  "className" | "disabled"
> {
  className?: string
  iconEnd?: ReactNode
  indicator?: ReactNode
  isDisabled?: BaseMenu.RadioItem.Props["disabled"]
}

export function MenuRadioItem(props: MenuRadioItemProps): JSX.Element {
  const {
    children,
    className: customClassName = "",
    iconEnd = undefined,
    indicator = undefined,
    isDisabled = false,
    ...rest
  } = props

  const combinedClassName = cx(MENU_CLASS_NAME.RADIO_ITEM, customClassName)
  const currentIndicator = indicator ?? (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <circle cx="8" cy="8" fill="currentColor" r="3" />
    </svg>
  )

  return (
    <BaseMenu.RadioItem
      className={combinedClassName}
      data-slot="menu-radio-item"
      disabled={isDisabled}
      {...rest}
    >
      <BaseMenu.RadioItemIndicator className={MENU_CLASS_NAME.ITEM_INDICATOR}>
        {currentIndicator}
      </BaseMenu.RadioItemIndicator>
      <span className={MENU_CLASS_NAME.ITEM_LABEL}>{children}</span>
      {iconEnd && <span className={MENU_CLASS_NAME.ITEM_ICON}>{iconEnd}</span>}
    </BaseMenu.RadioItem>
  )
}
