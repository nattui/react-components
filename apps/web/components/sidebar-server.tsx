import type { LinkProps } from "next/link"
import { SidebarClient } from "@/components/sidebar-client"

// Const NOTION_PAGE_ID = "30eb76f65e6e80a8a622d45f986012d6"

const links: {
  href: LinkProps<string>["href"]
  label: string
}[] = [
  {
    href: "/button",
    label: "Button",
  },
  {
    href: "/input",
    label: "Input",
  },
  {
    href: "/textarea",
    label: "Textarea",
  },
  {
    href: "/switch",
    label: "Switch",
  },
  {
    href: "/experiment/carousel",
    label: "Carousel",
  },
  {
    href: "/menu",
    label: "Menu",
  },
  {
    href: "/theme",
    label: "Theme",
  },
  {
    href: "/test",
    label: "Test",
  },
  {
    href: "/notion",
    label: "Notion",
  },
]

export function SidebarServer() {
  return <SidebarClient links={links} />
}
