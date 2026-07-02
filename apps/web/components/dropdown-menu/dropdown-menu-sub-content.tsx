import type { ComponentProps, JSX } from "react"
import { DropdownMenuContent } from "@/components/dropdown-menu/dropdown-menu-content"

interface DropdownMenuSubContentProps extends ComponentProps<typeof DropdownMenuContent> {}

export function DropdownMenuSubContent(props: DropdownMenuSubContentProps): JSX.Element {
  const ALIGN_OFFSET = -3

  const {
    align = "start",
    alignOffset = ALIGN_OFFSET,
    side = "right",
    sideOffset = 0,
    className = "",
    ...rest
  } = props

  return (
    <DropdownMenuContent
      align={align}
      alignOffset={alignOffset}
      className={`
        data-open:animate-in
        data-closed:animate-out data-closed:fade-out-0
        data-open:fade-in-0
        data-closed:zoom-out-95
        data-open:zoom-in-95
        data-[side=bottom]:slide-in-from-top-8
        data-[side=left]:slide-in-from-right-8
        data-[side=right]:slide-in-from-left-8
        data-[side=top]:slide-in-from-bottom-8
        w-auto min-w-96 rounded-8 bg-gray-1 p-4 text-gray-11 shadow-5
        shadow-gray-6 outline-1 outline-gray-6 duration-100
        ${className}
      `}
      data-slot="dropdown-menu-sub-content"
      side={side}
      sideOffset={sideOffset}
      {...rest}
    />
  )
}
