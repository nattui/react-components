"use client"

import { Spacer } from "@nattstack/ui"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import type { JSX } from "react"
import type { NotionRichTextSegment } from "@/components/notion/notion"
import { NotionRichTextSegments } from "@/components/notion/notion-rich-text-segments"

interface SidebarClientProps {
  sections: SidebarSection[]
}

interface SidebarSection {
  labelSegments: NotionRichTextSegment[]
  links: {
    href: LinkProps<string>["href"]
    label: string
  }[]
}

export function SidebarClient(props: SidebarClientProps): JSX.Element {
  const { sections } = props

  const pathname = usePathname()

  return (
    <aside
      className="
        sticky top-64 left-0 flex h-[calc(100dvh-64px)] shrink-0 flex-col
        bg-bg-secondary
      "
    >
      <Spacer height={16} />
      <div className="flex flex-col gap-y-16 overflow-y-auto px-24">
        {sections.map((section, sectionIndex) => (
          <div className="flex flex-col gap-y-8" key={sectionIndex}>
            {section.labelSegments.length > 0 && (
              <p className="text-12 leading-none font-500 text-gray-12">
                <NotionRichTextSegments
                  blockIndex={sectionIndex}
                  segments={section.labelSegments}
                />
              </p>
            )}

            <div className="flex flex-col gap-y-2">
              {section.links.map((link, linkIndex) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    className="
                      relative flex h-28 w-full items-center rounded-8 px-8
                      text-14 font-500 text-gray-11 transition-colors
                      hover:bg-gray-3 hover:text-gray-12
                      data-[is-active=true]:bg-gray-3
                      data-[is-active=true]:text-primary-9
                    "
                    data-is-active={isActive}
                    href={link.href}
                    key={`${sectionIndex}-${linkIndex}`}
                  >
                    {link.label}
                    {isActive && (
                      <div
                        className="
                          absolute top-0 -left-24 h-full w-2 bg-primary-9
                        "
                      />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
