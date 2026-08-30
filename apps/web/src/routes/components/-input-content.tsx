import {
  IconBanOutline18,
  IconCircleLoginOutline18,
  IconEnvelopeOutline18,
  IconLockOutline18,
} from "@nattstack/icons"
import { Button, Column, Input, Label, Row, Spacer } from "@nattstack/ui"
import type { JSX } from "react"

export function InputContent(): JSX.Element {
  return (
    <>
      <h1 className="mb-16 text-30 text-pretty">Input</h1>
      <p className="mb-24 text-16/1-875 text-pretty">
        Inputs are form controls that let users enter and edit text.
      </p>

      <Column className="w-full max-w-320">
        <Label htmlFor="email">Email</Label>
        <Spacer height={4} />
        <div className="relative">
          <IconEnvelopeOutline18 className="
            pointer-events-none absolute top-14 left-14 text-neutral-11
          " />
          <Input className="pl-44!" id="email" placeholder="name@example.com" type="email" />
        </div>
        <Spacer height={16} />

        <Label htmlFor="password">Password</Label>
        <Spacer height={4} />
        <div className="relative">
          <IconLockOutline18 className="
            pointer-events-none absolute top-14 left-14 text-neutral-11
          " />
          <Input className="px-44!" id="password" placeholder="••••••••" type="password" />
          {/* <Button className="group absolute! top-6 right-6" size={32} variant="ghost">
            <IconEyeOutline18
              className="
                text-neutral-11
                group-hover:text-neutral-12
                group-active:text-neutral-12
                transition-colors
              "
            />
          </Button> */}
        </div>
        <Spacer height={16} />

        <Button fullWidth iconStart={<IconCircleLoginOutline18 />} label="Sign in" size={44} />
        <Spacer height={64} />

        <Label htmlFor="disabled">Disabled</Label>
        <Spacer height={4} />
        <div className="relative">
          <IconBanOutline18 className="
            pointer-events-none absolute top-14 left-14 text-neutral-11
          " />
          <Input className="pl-44!" disabled id="disabled" placeholder="Disabled" type="url" />
        </div>
        <Spacer height={64} />

        <Label htmlFor="read-only">Read Only</Label>
        <Spacer height={4} />
        <div className="relative">
          <Input
            className="pr-44!"
            defaultValue="This is a read-only input"
            id="read-only"
            readOnly
            type="text"
          />
          {/* <Button className="group absolute! top-6 right-6" size={32} variant="ghost">
            <IconCopyOutline18
              className="
                text-neutral-11
                group-hover:text-neutral-12
                group-active:text-neutral-12
                transition-colors
              "
            />
          </Button> */}
        </div>
        <Spacer height={64} />

        <Label htmlFor="input-with-end-icon-button">Input with end icon button</Label>
        <Spacer height={4} />
        <Row>
          <Input
            className="
              rounded-r-none!
              hover:z-10
              focus-visible:z-20
            "
            id="input-with-end-icon-button"
            placeholder="Download"
            type="url"
          />
          {/* <Button
            className="
              group -ml-px rounded-l-none!
              hover:z-10
              focus-visible:z-20
            "
            size={44}
            variant="secondary"
          >
            <IconDownloadOutline18
              className="
                text-neutral-11
                group-hover:text-neutral-12
                group-active:text-neutral-12
                transition-colors
              "
            />
          </Button> */}
        </Row>
        <Spacer height={64} />

        <Label htmlFor="active">Active</Label>
        <Spacer height={4} />
        <Input active id="active" placeholder="Active" type="url" />
        <Spacer height={64} />

        <Label htmlFor="valid">Valid</Label>
        <Spacer height={4} />
        <Input id="valid" placeholder="Valid" type="url" valid />
        <Spacer height={64} />

        <Label htmlFor="invalid">Invalid</Label>
        <Spacer height={4} />
        <Input id="invalid" invalid placeholder="Invalid" type="url" />
      </Column>
    </>
  )
}
