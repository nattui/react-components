"use client"

import { Button } from "@nattui/react-components"
import { LucidePanelLeft } from "lucide-react"

export default function SidebarPage() {
  return (
    <div className="flex w-full grow p-64">
      <div className="d mx-auto">
        {/* Sidebar */}
        <div className="relative flex h-full w-256 flex-col">
          <Button
            className="absolute! top-8 right-8 cursor-w-resize!"
            iconOnly
            size={32}
            variant="ghost"
          >
            <LucidePanelLeft size={18} />
          </Button>
        </div>
      </div>
    </div>
  )
}
