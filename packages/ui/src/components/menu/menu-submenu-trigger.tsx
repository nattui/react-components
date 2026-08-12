import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"
import { menuItemStyles } from "./menu-item.stylex"
import { menuSubmenuTriggerStyles } from "./menu-submenu-trigger.stylex"

export interface MenuSubmenuTriggerProps extends Omit<BaseMenu.SubmenuTrigger.Props, "className"> {
  className?: string
}

export function MenuSubmenuTrigger(props: MenuSubmenuTriggerProps): JSX.Element {
  const { children, className = "", ...rest } = props

  const combinedClassName = cn(
    pickerItemStyles.base,
    menuItemStyles.base,
    menuSubmenuTriggerStyles.base,
    className,
  )

  return (
    <BaseMenu.SubmenuTrigger
      className={combinedClassName}
      data-component="menu-submenu-trigger"
      {...rest}
    >
      {children}

      <span
        className={cn(menuSubmenuTriggerStyles.icon)}
        data-component="menu-submenu-trigger-icon"
      >
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
