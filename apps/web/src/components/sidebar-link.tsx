import { Link, type LinkComponentProps } from "@tanstack/react-router"
import type { JSX } from "react"

export function SidebarLink(props: LinkComponentProps): JSX.Element {
  return (
    <Link
      activeProps={{ className: "bg-gray-3 text-text-primary" }}
      className="
        text-14 font-500
        hover:text-text-primary hover:bg-gray-3
        rounded-8 flex h-32 items-center px-8
      "
      {...props}
    />
  )
}
