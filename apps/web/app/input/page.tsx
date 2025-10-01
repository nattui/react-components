import { Input, Label } from "@nattui/react-components"
import { LucideMail } from "lucide-react"

export default function InputPage() {
  return (
    <div className="flex flex-col p-8 max-w-sm mx-auto">
      <Label className="mb-1" htmlFor="name">
        Name
      </Label>
      <Input className="mb-8" id="name" placeholder="Enter your name" />

      <Label className="mb-1" htmlFor="email">
        Email
      </Label>
      <Input className="mb-8" id="email" placeholder="Enter your email" />

      <Label className="mb-1" htmlFor="url-disabled">
        URL (Disabled)
      </Label>
      <Input
        className="mb-8"
        defaultValue="https://example.com"
        id="url-disabled"
        isDisabled
        type="url"
      />

      <Label className="mb-1" htmlFor="password">
        Password
      </Label>
      <Input
        className="mb-8"
        id="password"
        placeholder="••••••••"
        type="password"
      />

      <Label className="mb-1" htmlFor="url-read-only">
        URL (Read Only)
      </Label>
      <Input
        className="mb-8"
        id="url-read-only"
        defaultValue="https://example.com"
        type="url"
        isReadOnly
      />

      <div className="relative">
        <LucideMail
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <Input
          className="pl-9!"
          defaultValue="example@example.com"
          id="icon-email"
          type="email"
        />
      </div>
    </div>
  )
}
