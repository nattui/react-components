import { Input, Label } from "@nattui/react-components"

export default function InputPage() {
  return (
    <div className="flex flex-col p-16">
      <Label className="mb-1" htmlFor="name">
        Name
      </Label>
      <Input className="mb-8" id="name" placeholder="Enter your name" />

      <Label className="mb-1" htmlFor="email">
        Email
      </Label>
      <Input className="mb-8" id="email" placeholder="Enter your email" />

      <Input className="mb-8" isDisabled placeholder="Disabled" />

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
        id="url-read-only"
        value="https://example.com"
        type="url"
        isReadOnly
      />
    </div>
  )
}
