import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { cn } from "../cn"
import { pickerSeparatorStyles } from "../picker/picker-separator.stylex"

export interface MenuSeparatorProps extends Omit<BaseMenu.Separator.Props, "className"> {
  className?: string
}

export function MenuSeparator(props: MenuSeparatorProps): JSX.Element {
  const { className = "", ...rest } = props

  const combinedClassName = cn(pickerSeparatorStyles.base, className)

  return (
    <BaseMenu.Separator className={combinedClassName} data-component="menu-separator" {...rest} />
  )
}
