import { Column } from "@nattstack/ui"
import type { JSX } from "react"

export function Sidebar(): JSX.Element {
  return (
    <Column as="aside" className="sticky top-0 left-0 h-dvh w-full max-w-[240px]">
      {/* Top */}
      <p>Sidebar Top</p>

      {/* Middle */}
      <p>Sidebar Middle</p>

      {/* Bottom */}
      <p>Sidebar Bottom</p>
    </Column>
  )
}
