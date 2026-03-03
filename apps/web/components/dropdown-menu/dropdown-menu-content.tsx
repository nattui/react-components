import { Menu as MenuPrimitive } from "@base-ui/react"

interface DropdownMenuContentProps
  extends
    Pick<MenuPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">,
    MenuPrimitive.Popup.Props {}

export function DropdownMenuContent(props: DropdownMenuContentProps) {
  const {
    align = "start",
    alignOffset = 0,
    className,
    side = "bottom",
    sideOffset = 4,
    ...rest
  } = props

  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50 outline-none"
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          className={`data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-8 data-[side=left]:slide-in-from-right-8 data-[side=right]:slide-in-from-left-8 data-[side=top]:slide-in-from-bottom-8 data-[side=inline-start]:slide-in-from-right-8 data-[side=inline-end]:slide-in-from-left-8 shadow-gray-6 outline-gray-6 bg-gray-1 text-gray-11 z-50 max-h-(--available-height) w-(--anchor-width) min-w-128 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-8 p-4 shadow-4 outline-1 duration-100 data-closed:overflow-hidden ${className}`}
          data-slot="dropdown-menu-content"
          {...rest}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}
