import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerItemStyles } from "../picker/picker-item.stylex"
import { menuItemStyles } from "./menu-item.stylex"
import { menuSubmenuTriggerStyles } from "./menu-submenu-trigger.stylex"

export { menuSubmenuTriggerStyles } from "./menu-submenu-trigger.stylex"

export interface MenuSubmenuTriggerProps extends Omit<
  BaseMenu.SubmenuTrigger.Props,
  "className" | "disabled"
> {
  className?: string
  isDisabled?: BaseMenu.SubmenuTrigger.Props["disabled"]
}

export function MenuSubmenuTrigger(props: MenuSubmenuTriggerProps): JSX.Element {
  const { children, className: customClassName = "", isDisabled = false, ...rest } = props

  return (
    <BaseMenu.SubmenuTrigger
      className={cn(
        sx(pickerItemStyles.base, menuItemStyles.base, menuSubmenuTriggerStyles.base),
        customClassName,
      )}
      data-slot="menu-submenu-trigger"
      disabled={isDisabled}
      {...rest}
    >
      {children}

      <span className={sx(menuSubmenuTriggerStyles.icon)} data-slot="menu-submenu-trigger-icon">
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
