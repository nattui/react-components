"use client"

import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"

export default function Topbar() {
  return (
    <div className="flex items-center gap-16 p-16">
      <NavLink href="/button">Button</NavLink>
      <NavLink href="/input">Input</NavLink>
      <NavLink href="/sidebar">Sidebar</NavLink>
    </div>
  )
}

function NavLink(props: LinkProps<string>) {
  const { children, href } = props
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className={`text-[15px] font-medium transition-colors ${
        isActive
          ? "text-primary-9 underline"
          : "text-gray-700 hover:text-gray-900 hover:underline"
      }`}
      href={href}
    >
      {children}
    </Link>
  )
}
