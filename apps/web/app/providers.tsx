"use client"

import { TooltipProvider } from "@nattstack/ui"
import type { PropsWithChildren } from "react"

export function Providers(props: PropsWithChildren) {
  const { children } = props

  return <TooltipProvider>{children}</TooltipProvider>
}
