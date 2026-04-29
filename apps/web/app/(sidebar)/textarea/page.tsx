"use client"

import { Column, Label, Spacer, Textarea } from "@nattstack/ui"
import type { JSX } from "react"

export default function TextareaPage(): JSX.Element {
  return (
    <Column className="w-full max-w-480">
      <Label htmlFor="message">Message</Label>
      <Spacer height={4} />
      <Textarea id="message" placeholder="Share what's on your mind" />
    </Column>
  )
}
