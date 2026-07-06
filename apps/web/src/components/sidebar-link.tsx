import { Link, type LinkComponentProps } from "@tanstack/react-router"
import type { JSX } from "react"

export function SidebarLink(props: LinkComponentProps): JSX.Element {
  return (
    <Link
      activeProps={{
        className: `
          bg-gray-3 text-text-primary relative
          before:absolute before:-left-8 before:top-0
          before:h-32 before:w-2 before:bg-primary
          before:content-['']
        `,
      }}
      className="
        text-14 font-500
        hover:text-text-primary hover:bg-gray-3
        rounded-8 flex h-32 shrink-0 items-center px-8
      "
      {...props}
    />
  )
}
