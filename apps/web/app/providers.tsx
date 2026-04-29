"use client"

import { TooltipProvider } from "@nattstack/ui"
import type { PropsWithChildren, JSX } from "react"

export function Providers(props: PropsWithChildren): JSX.Element {
  const { children } = props

  return <TooltipProvider>{children}</TooltipProvider>
}
