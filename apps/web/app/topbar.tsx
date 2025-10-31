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
      <NavLink href="/combobox">Combobox</NavLink>
    </div>
  )
}

function NavLink(props: LinkProps<string>) {
  const { children, href } = props

  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className="font-500 text-[15px] text-gray-11 transition-colors hover:text-gray-12 hover:underline data-[active=true]:text-primary-9 data-[active=true]:underline"
      data-active={isActive}
      href={href}
    >
      {children}
    </Link>
  )
}
