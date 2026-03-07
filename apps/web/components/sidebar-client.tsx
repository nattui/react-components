"use client"

import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"

interface SidebarClientProps {
  links: {
    href: LinkProps<string>["href"]
    label: string
  }[]
}

export function SidebarClient(props: SidebarClientProps) {
  const { links } = props

  const pathname = usePathname()

  return (
    <aside className="bg-gray-1 sticky top-64 left-0 flex h-[calc(100dvh-64px)] shrink-0 flex-col">
      <div className="flex flex-col gap-y-4 overflow-y-auto px-24">
        {links.map((link, index) => {
          const isActive = pathname === link.href

          return (
            <Link
              className="text-14 font-500 data-[is-active=true]:text-primary-9 hover:text-gray-12 w-fit transition-colors"
              data-is-active={isActive}
              href={link.href}
              key={index}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
