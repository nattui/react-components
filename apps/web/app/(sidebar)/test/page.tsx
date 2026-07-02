import { LucideChevronRight, LucideX } from "@nattstack/icons"
import { Button, Row } from "@nattstack/ui"
import Link from "next/link"
import type { JSX } from "react"

export default function TestPage(): JSX.Element {
  return (
    <Row
      alignItems="center"
      as="section"
      className="
        relative h-36 w-full bg-gray-2 px-48
        before:pointer-events-none before:absolute before:inset-0
        before:bg-[url(/images/logomark.svg)] before:bg-center before:bg-repeat
        before:opacity-10 before:content-['']
      "
      gapX={4}
      justifyContent="center"
    >
      {/* Content */}
      <Row
        alignItems="center"
        className="
          z-10 h-full w-full
          bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,var(--color-gray-2)_10%,var(--color-gray-2)_90%,rgba(0,0,0,0)_100%)]
        "
        gapX={4}
        justifyContent="center"
      >
        <Link
          className="
            truncate text-14 font-500
            hover:underline
          "
          href="/"
        >
          Encore × Neon: Powering Preview Environments with Neon branching
        </Link>
        <LucideChevronRight className="shrink-0" size={14} />
      </Row>

      {/* Close */}
      <Button className="absolute top-2 right-2" isIconOnly size={32} variant="ghost">
        <LucideX className="text-gray-11" />
      </Button>
    </Row>
  )
}
