import type { ComponentProps } from "react"
import { MenuContent } from "@/components/menu/menu-content"

export function MenuSubContent({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  className,
  ...props
}: ComponentProps<typeof MenuContent>) {
  return (
    <MenuContent
      align={align}
      alignOffset={alignOffset}
      className={`data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-auto min-w-[96px] rounded-lg p-1 shadow-lg ring-1 duration-100 ${className}`}
      data-slot="menu-sub-content"
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  )
}
