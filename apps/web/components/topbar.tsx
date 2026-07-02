import Link from "next/link"
import type { JSX } from "react"
import { Logomark } from "@/components/logomark"
import { Logotype } from "@/components/logotype"
import { NotionRevalidateButton } from "@/components/notion/notion-revalidate-button"
import { TabsTheme } from "@/components/tabs-theme"

export function Topbar(): JSX.Element {
  return (
    <header className="
      sticky top-0 left-0 z-10 flex h-64 w-full bg-bg-secondary/90 px-24
      backdrop-blur-[48px]
    ">
      <div className="flex size-full items-center justify-between">
        <Link
          className="
            -ml-8 flex items-center gap-x-8 p-8 transition-opacity
            hover:opacity-75
          "
          href="/"
        >
          <Logomark className="text-primary" />
          <Logotype className="text-text-primary" />
        </Link>

        <div className="flex items-center gap-x-8">
          <div className="max-640:hidden">
            <TabsTheme />
          </div>
          <NotionRevalidateButton />
        </div>
      </div>
    </header>
  )
}
