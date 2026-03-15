"use client"

import { Button } from "@nattstack/ui/react"
import { useFormStatus } from "react-dom"

export function NotionRevalidateButtonClient() {
  const { pending } = useFormStatus()

  return (
    <Button isLoading={pending} type="submit" variant="secondary">
      {pending ? "Refreshing..." : "Refresh Notion content cache"}
    </Button>
  )
}
