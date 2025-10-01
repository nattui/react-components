import { Button, Input, Label } from "@nattui/react-components"
import {
  LucideBan,
  LucideCopy,
  LucideDownload,
  LucideEye,
  LucideLock,
  LucideLogIn,
  LucideMail,
} from "lucide-react"

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

      <Label className="mb-1" htmlFor="disabled">
        Disabled
      </Label>
      <div className="relative mb-8">
        <LucideBan className="absolute left-3 top-3 text-gray-400" size={16} />
        <Input
          className="pl-9!"
          id="disabled"
          isDisabled
          placeholder="Disabled"
          type="url"
        />
      </div>

      <Label className="mb-1" htmlFor="read-only">
        Read Only
      </Label>
      <div className="relative mb-8">
        <Input
          className="pr-9!"
          defaultValue="This is a read-only input"
          id="read-only"
          isReadOnly
          type="text"
        />
        <Button
          className="absolute! right-1 top-1 group"
          variant="ghost"
          size={32}
          iconOnly
        >
          <LucideCopy
            className="text-gray-400 group-hover:text-gray-900 group-active:text-gray-900 transition-colors"
            size={16}
          />
        </Button>
      </div>

      <Label className="mb-1" htmlFor="input-with-end-icon-button">
        Input with end icon button
      </Label>
      <div className="flex">
        <Input
          className="rounded-r-none! focus-visible:z-20 hover:z-10"
          id="input-with-end-icon-button"
          placeholder="Download"
          type="url"
        />
        <Button
          className="group rounded-l-none! -ml-px shadow-none! focus-visible:z-20 hover:z-10"
          variant="secondary"
          size={40}
          iconOnly
        >
          <LucideDownload
            className="text-gray-400 group-hover:text-gray-900 group-active:text-gray-900 transition-colors"
            size={16}
          />
        </Button>
      </div>
    </div>
  )
}
