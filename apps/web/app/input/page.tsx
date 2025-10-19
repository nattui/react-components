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
          className="text-gray-11 absolute top-12 left-12"
          size={16}
        />
        <Input
          className="pl-36!"
          id="email"
          placeholder="name@example.com"
          type="email"
        />
      </div>

      <Label className="mb-1" htmlFor="password">
        Password
      </Label>
      <div className="relative mb-16">
        <LucideLock
          className="text-gray-11 absolute top-12 left-12"
          size={16}
        />
        <Input
          className="px-36!"
          id="password"
          placeholder="••••••••"
          type="password"
        />
        <Button
          className="group absolute! top-4 right-4"
          iconOnly
          size={32}
          variant="ghost"
        >
          <LucideEye
            className="text-gray-11 group-hover:text-gray-12 group-active:text-gray-12 transition-colors"
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
        <LucideBan className="text-gray-11 absolute top-12 left-12" size={16} />
        <Input
          className="pl-36!"
          id="disabled"
          isDisabled
          placeholder="Disabled"
          type="url"
        />
      </div>

      <div className="h-20" />

      <Label className="mb-1" htmlFor="read-only">
        Read Only
      </Label>
      <div className="relative">
        <Input
          className="pr-36!"
          defaultValue="This is a read-only input"
          id="read-only"
          isReadOnly
          type="text"
        />
        <Button
          className="group absolute! top-4 right-4"
          iconOnly
          size={32}
          variant="ghost"
        >
          <LucideCopy
            className="text-gray-11 group-hover:text-gray-12 group-active:text-gray-12 transition-colors"
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
          type="url"
        />
        <Button
          className="group -ml-px rounded-l-none! shadow-none! hover:z-10 focus-visible:z-20"
          iconOnly
          size={40}
          variant="secondary"
        >
          <LucideDownload
            className="text-gray-11 group-hover:text-gray-12 group-active:text-gray-12 transition-colors"
            size={16}
          />
        </Button>

        <div className="h-20" />
      </div>
    </div>
  )
}
