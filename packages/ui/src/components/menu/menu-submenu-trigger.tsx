import { Menu as BaseMenu } from "@base-ui/react"
import { cva } from "class-variance-authority"
import type { JSX } from "react"
import pickerStyles from "../picker/picker-item.module.css"
import itemStyles from "./menu-item.module.css"
import styles from "./menu-submenu-trigger.module.css"

export interface MenuSubmenuTriggerProps extends Omit<
  BaseMenu.SubmenuTrigger.Props,
  "className" | "disabled"
> {
  className?: string
  isDisabled?: BaseMenu.SubmenuTrigger.Props["disabled"]
}

export function MenuSubmenuTrigger(props: MenuSubmenuTriggerProps): JSX.Element {
  const { children, className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = menuSubmenuTriggerVariants({ className: customClassName })

  return (
    <BaseMenu.SubmenuTrigger
      className={combinedClassName}
      data-slot="menu-submenu-trigger"
      disabled={isDisabled}
      {...rest}
    >
      {children}

      <span className={styles.icon} data-slot="menu-submenu-trigger-icon">
        {/* chevron-right */}
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
            points="6.5 2.75 12.75 9 6.5 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </span>
    </BaseMenu.SubmenuTrigger>
  )
}

export const menuSubmenuTriggerVariants = cva([pickerStyles.base, itemStyles.base, styles.base])
