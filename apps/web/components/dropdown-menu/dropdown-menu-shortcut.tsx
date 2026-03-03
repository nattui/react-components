import type { ComponentProps } from "react"

interface DropdownMenuShortcutProps extends ComponentProps<"span"> {}

export function DropdownMenuShortcut(props: DropdownMenuShortcutProps) {
  const { className, ...rest } = props

  return (
    <span
      className={`text-muted-foreground group-focus/menu-item:text-accent-foreground ml-auto text-xs tracking-widest ${className}`}
      data-slot="menu-shortcut"
      {...rest}
    />
  )
}
