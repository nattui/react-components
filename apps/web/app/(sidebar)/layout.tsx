import type { PropsWithChildren } from "react"
import { SidebarServer } from "@/components/sidebar-server"

export default function SidebarLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <div className="flex size-full">
      <SidebarServer />
      <main className="w-full min-w-0">
        <div className="relative mx-auto flex w-full max-w-768 flex-col px-16 py-80">
          {children}
        </div>
      </main>
    </div>
  )
}
