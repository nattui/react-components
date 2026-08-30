import { Link, type LinkComponentProps } from "@tanstack/react-router"
import type { JSX } from "react"

export function SidebarLink(props: LinkComponentProps): JSX.Element {
  return (
    <Link
      activeProps={{
        className: `
          bg-neutral-3 text-text-primary relative
          before:absolute before:-left-8 before:top-0
          before:h-32 before:w-2 before:bg-accent
          before:content-['']
        `,
      }}
      className="
        flex h-32 shrink-0 items-center rounded-8 px-8 text-14 font-[450]
        select-none
        hover:bg-neutral-3 hover:text-text-primary
      "
      {...props}
    />
  )
}
