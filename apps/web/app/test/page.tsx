import { LucideChevronRight, LucideX } from "@nattui/icons"
import { Button, Row } from "@nattui/react-components"
import Link from "next/link"

export default function TestPage() {
  return (
    <Row
      alignItems="center"
      as="section"
      className="bg-gray-2 relative h-36 w-full px-48 before:pointer-events-none before:absolute before:inset-0 before:bg-[url(/images/logomark.svg)] before:bg-center before:bg-repeat before:opacity-10 before:content-['']"
      gapX={4}
      justifyContent="center"
    >
      {/* Content */}
      <Row
        alignItems="center"
        className="z-10 h-full w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,var(--color-gray-2)_10%,var(--color-gray-2)_90%,rgba(0,0,0,0)_100%)]"
        gapX={4}
        justifyContent="center"
      >
        <Link className="text-14 font-500 truncate hover:underline" href="/">
          Encore × Neon: Powering Preview Environments with Neon branching
        </Link>
        <LucideChevronRight className="shrink-0" size={14} />
      </Row>

      {/* Close */}
      <Button className="absolute top-2 right-2" isIconOnly size={32} variant="ghost">
        <LucideX className="text-gray-11" size={16} />
      </Button>
    </Row>
  )
}
