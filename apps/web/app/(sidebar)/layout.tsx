import type { PropsWithChildren, JSX } from "react"
import { SidebarServer } from "@/components/sidebar-server"

export default function SidebarLayout(props: PropsWithChildren): JSX.Element {
  const { children } = props

  return (
    <div className="flex size-full">
      <SidebarServer />
      <main
        className="
          mr-8 mb-8 w-full min-w-0 rounded-12 border border-border bg-bg-primary
          shadow-2
        "
      >
        <div
          className="
            relative mx-auto flex w-full max-w-768 flex-col px-16 py-80
          "
        >
          {children}
        </div>
      </main>
    </div>
  )
}
