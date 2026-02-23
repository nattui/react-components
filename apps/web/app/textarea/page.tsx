"use client"

import { Column, Label, Spacer, Textarea } from "@nattui/react-components"

export default function TextareaPage() {
  return (
    <Column className="w-full max-w-480">
      <Label htmlFor="message">Message</Label>
      <Spacer height={4} />
      <Textarea id="message" placeholder="Share what's on your mind" />
    </Column>
  )
}
