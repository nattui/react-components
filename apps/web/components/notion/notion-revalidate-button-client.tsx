"use client"

import { Button } from "@nattstack/ui"
import type { JSX } from "react"
import { useFormStatus } from "react-dom"

export function NotionRevalidateButtonClient(): JSX.Element {
  const { pending } = useFormStatus()

  return (
    <Button isLoading={pending} type="submit" variant="secondary">
      {pending ? "Refreshing..." : "Revalidate"}
    </Button>
  )
}
