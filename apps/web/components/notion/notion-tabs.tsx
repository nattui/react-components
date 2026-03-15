"use client"

import { Tabs, TabsUnderlineList, TabsUnderlineTab } from "@nattstack/ui/react"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import type { NotionTab } from "@/components/notion/notion"

interface NotionTabsProps {
  tabs: NotionTab[]
}

export function NotionTabs(props: NotionTabsProps) {
  const { tabs } = props
  const pathname = usePathname()

  if (tabs.length === 0) {
    return
  }

  const selectedValue = tabs.some((tab) => tab.href === pathname) ? pathname : tabs[0].href

  return (
    <Tabs value={selectedValue}>
      <TabsUnderlineList>
        {tabs.map((tab, index) => (
          <TabsUnderlineTab
            isNativeButton={false}
            key={index}
            render={<Link href={tab.href as LinkProps<string>["href"]} />}
            value={tab.href}
          >
            {tab.label}
          </TabsUnderlineTab>
        ))}
      </TabsUnderlineList>
    </Tabs>
  )
}
