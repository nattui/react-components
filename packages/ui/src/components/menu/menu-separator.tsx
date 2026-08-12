import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn, sx } from "../cn"
import { pickerSeparatorStyles } from "../picker/picker-separator.stylex"

export interface MenuSeparatorProps extends Omit<BaseMenu.Separator.Props, "className"> {
  className?: string
}

export function MenuSeparator(props: MenuSeparatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  return (
    <BaseMenu.Separator
      className={cn(sx(pickerSeparatorStyles.base), customClassName)}
      data-slot="menu-separator"
      {...rest}
    />
  )
}
