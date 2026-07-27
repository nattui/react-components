import { Menu as BaseMenu } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import styles from "../picker/picker-item.module.css"

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

  const combinedClassName = menuCheckboxItemVariants({ className: customClassName })

  return (
    <BaseMenu.CheckboxItem
      checked={isChecked}
      className={combinedClassName}
      data-slot="menu-checkbox-item"
      defaultChecked={isDefaultChecked}
      disabled={isDisabled}
      {...rest}
    >
      <span className={styles.label} data-slot="menu-checkbox-item-text">
        {children}
      </span>

      <BaseMenu.CheckboxItemIndicator
        className={styles.indicator}
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

export const menuCheckboxItemVariants = cva(styles.base)
