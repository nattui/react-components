import type { ComponentProps } from "react"

interface DropdownMenuShortcutProps extends ComponentProps<"span"> {}

export function DropdownMenuShortcut(props: DropdownMenuShortcutProps) {
  const { className = "", ...rest } = props

  return (
    <span
      className={`text-gray-10 group-focus/dropdown-menu-item:text-gray-12 text-12 tracking-p01 ml-auto ${className}`}
      data-slot="dropdown-menu-shortcut"
      {...rest}
    />
  )
}
