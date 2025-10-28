"use client"

import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"

export default function Topbar() {
  return (
    <div className="flex items-center gap-16 p-16">
      <NavLink href="/button">Button</NavLink>
      <NavLink href="/input">Input</NavLink>
      <NavLink href="/sidebar">Sidebar</NavLink>
      <NavLink href="/dialog">Dialog</NavLink>
    </div>
  )
}

function NavLink(props: LinkProps<string>) {
  const { children, href } = props
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className={`font-medium text-[15px] transition-colors ${
        isActive
          ? "text-primary underline"
          : "text-gray-11 hover:text-gray-12 hover:underline"
      }`}
      href={href}
    >
      {children}
    </Link>
  )
}
