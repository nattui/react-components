"use client"

import { Label, Textarea } from "@nattui/react-components"

export default function TextareaPage() {
  return (
    <div className="flex w-full max-w-480 flex-col">
      <Label
        className="mb-4"
        htmlFor="message"
      >
        Message
      </Label>
      <Textarea
        id="message"
        placeholder="Share what's on your mind"
      />
    </div>
  )
}
