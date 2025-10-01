import { Button, Input, Label } from "@nattui/react-components"
import { LucideEye, LucideLock, LucideLogIn, LucideMail } from "lucide-react"

export default function InputPage() {
  return (
    <div className="flex flex-col p-8 max-w-sm mx-auto">
      <Label className="mb-1" htmlFor="email">
        Email
      </Label>
      <div className="relative mb-4">
        <LucideMail className="absolute left-3 top-3 text-gray-400" size={16} />
        <Input
          className="pl-9!"
          id="email"
          type="email"
          placeholder="name@example.com"
        />
      </div>

      <Label className="mb-1" htmlFor="password">
        Password
      </Label>
      <div className="relative mb-4">
        <LucideLock className="absolute left-3 top-3 text-gray-400" size={16} />
        <Input
          className="px-9!"
          id="password"
          type="password"
          placeholder="••••••••"
        />
        <Button
          className="absolute! right-1 top-1 group"
          variant="ghost"
          size={32}
          iconOnly
        >
          <LucideEye
            className="text-gray-400 group-hover:text-gray-900 group-active:text-gray-900 transition-colors"
            size={16}
          />
        </Button>
      </div>

      <Button
        className="mb-8"
        iconStart={<LucideLogIn size={16} />}
        isFullWidth
        size={44}
        variant="accent"
      >
        Sign in
      </Button>

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
    </div>
  )
}
