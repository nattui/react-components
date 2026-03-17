import Link from "next/link"
import { Logomark } from "@/components/logomark"
import { Logotype } from "@/components/logotype"
import { NotionRevalidateButton } from "@/components/notion/notion-revalidate-button"
import { ToggleGroupTheme } from "@/components/toggle-group-theme"

export function Topbar() {
  return (
    <header className="bg-gray-1/90 sticky top-0 left-0 z-10 flex h-64 w-full px-24 backdrop-blur-[48px]">
      <div className="flex size-full items-center justify-between">
        <Link
          className="-ml-8 flex items-center gap-x-8 p-8 transition-opacity hover:opacity-75"
          href="/"
        >
          <Logomark className="text-primary-9" />
          <Logotype className="text-gray-12" />
        </Link>

        <div className="flex items-center gap-x-8">
          <ToggleGroupTheme />
          <NotionRevalidateButton />
        </div>
      </div>
    </header>
  )
}
