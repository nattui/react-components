import type { ComponentProps } from "react"
import { DropdownMenuContent } from "@/components/dropdown-menu/dropdown-menu-content"

interface DropdownMenuSubContentProps extends ComponentProps<typeof DropdownMenuContent> {}

export function DropdownMenuSubContent(props: DropdownMenuSubContentProps) {
  const {
    align = "start",
    alignOffset = -3,
    side = "right",
    sideOffset = 0,
    className,
    ...rest
  } = props

  return (
    <DropdownMenuContent
      align={align}
      alignOffset={alignOffset}
      className={`data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-8 data-[side=left]:slide-in-from-right-8 data-[side=right]:slide-in-from-left-8 data-[side=top]:slide-in-from-bottom-8 shadow-gray-6 outline-gray-6 bg-gray-1 text-gray-11 rounded-8 shadow-5 w-auto min-w-96 p-4 outline-1 duration-100 ${className}`}
      data-slot="dropdown-menu-sub-content"
      side={side}
      sideOffset={sideOffset}
      {...rest}
    />
  )
}
