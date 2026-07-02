import type { ComponentProps, JSX } from "react"

interface DropdownMenuShortcutProps extends ComponentProps<"span"> {}

export function DropdownMenuShortcut(props: DropdownMenuShortcutProps): JSX.Element {
  const { className = "", ...rest } = props

  return (
    <span
      className={`
        tracking-p01 ml-auto text-12 text-gray-10
        group-focus/dropdown-menu-item:text-gray-12
        ${className}
      `}
      data-slot="dropdown-menu-shortcut"
      {...rest}
    />
  )
}
