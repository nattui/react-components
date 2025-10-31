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
    <div className="mx-auto flex max-w-448 flex-col p-64">
      <div className="h-20" />

      <Label className="mb-1" htmlFor="email">
        Email
      </Label>
      <div className="relative mb-16">
        <LucideMail
          className="absolute top-14 left-14 text-gray-11"
          size={16}
        />
        <Input
          className="pl-44!"
          id="email"
          placeholder="name@example.com"
          size={44}
          type="email"
        />
      </div>

      <Label className="mb-1" htmlFor="password">
        Password
      </Label>
      <div className="relative mb-16">
        <LucideLock
          className="absolute top-14 left-14 text-gray-11"
          size={16}
        />
        <Input
          className="px-44!"
          id="password"
          placeholder="••••••••"
          size={44}
          type="password"
        />
        <Button
          className="group absolute! top-6 right-6"
          iconOnly
          size={32}
          variant="ghost"
        >
          <LucideEye
            className="text-gray-11 transition-colors group-hover:text-gray-12 group-active:text-gray-12"
            size={16}
          />
        </Button>
      </div>

      <Button
        iconStart={<LucideLogIn size={16} />}
        isFullWidth
        size={44}
        variant="accent"
      >
        Sign in
      </Button>

      <div className="h-20" />

      <Label className="mb-1" htmlFor="disabled">
        Disabled
      </Label>
      <div className="relative">
        <LucideBan className="absolute top-14 left-14 text-gray-11" size={16} />
        <Input
          className="pl-44!"
          id="disabled"
          isDisabled
          placeholder="Disabled"
          size={44}
          type="url"
        />
      </div>

      <div className="h-20" />

      <Label className="mb-1" htmlFor="read-only">
        Read Only
      </Label>
      <div className="relative">
        <Input
          className="pr-44!"
          defaultValue="This is a read-only input"
          id="read-only"
          isReadOnly
          size={44}
          type="text"
        />
        <Button
          className="group absolute! top-6 right-6"
          iconOnly
          size={32}
          variant="ghost"
        >
          <LucideCopy
            className="text-gray-11 transition-colors group-hover:text-gray-12 group-active:text-gray-12"
            size={16}
          />
        </Button>
      </div>

      <div className="h-20" />

      <Label className="mb-1" htmlFor="input-with-end-icon-button">
        Input with end icon button
      </Label>
      <div className="flex">
        <Input
          className="rounded-r-none! hover:z-10 focus-visible:z-20"
          id="input-with-end-icon-button"
          placeholder="Download"
          size={44}
          type="url"
        />
        <Button
          className="group -ml-px rounded-l-none! shadow-none! hover:z-10 focus-visible:z-20"
          iconOnly
          size={44}
          variant="secondary"
        >
          <LucideDownload
            className="text-gray-11 transition-colors group-hover:text-gray-12 group-active:text-gray-12"
            size={16}
          />
        </Button>

        <div className="h-20" />
      </div>
    </div>
  )
}
