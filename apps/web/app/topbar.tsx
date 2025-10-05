"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { PropsWithChildren } from "react"

export default function Topbar() {
  return (
    <div className="flex items-center gap-4 p-4">
      <NavLink href="/button">Button</NavLink>
      <NavLink href="/input">Input</NavLink>
    </div>
  )
}

function NavLink(props: PropsWithChildren<{ href: string }>) {
  const { children, href } = props
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className={`font-medium text-[15px] transition-colors ${
        isActive
          ? "text-[#e93d82] underline"
          : "text-gray-700 hover:text-gray-900 hover:underline"
      }`}
      href={href}
    >
      {children}
    </Link>
  )
}
