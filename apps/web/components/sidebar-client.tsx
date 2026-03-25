"use client"

import { Spacer } from "@nattstack/ui"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
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

export function SidebarClient(props: SidebarClientProps) {
  const { sections } = props

  const pathname = usePathname()

  return (
    <aside className="bg-gray-1 sticky top-64 left-0 flex h-[calc(100dvh-64px)] shrink-0 flex-col">
      <Spacer height={16} />
      <div className="flex flex-col gap-y-16 overflow-y-auto px-24">
        {sections.map((section, sectionIndex) => (
          <div className="flex flex-col gap-y-8" key={sectionIndex}>
            {section.labelSegments.length > 0 && (
              <p className="text-gray-12 text-14 font-500 leading-none">
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
                    className="text-14 font-500 data-[is-active=true]:text-primary-9 hover:text-gray-12 hover:bg-gray-3 rounded-8 data-[is-active=true]:bg-gray-3 text-gray-11 relative flex h-28 w-full items-center px-8 transition-colors"
                    data-is-active={isActive}
                    href={link.href}
                    key={`${sectionIndex}-${linkIndex}`}
                  >
                    {link.label}
                    {isActive && (
                      <div className="bg-primary-9 absolute top-0 -left-24 h-full w-2" />
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
