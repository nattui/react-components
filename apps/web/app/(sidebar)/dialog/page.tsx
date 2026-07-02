import { Dialog } from "@base-ui/react"
import { Button, Column } from "@nattstack/ui"
import type { JSX } from "react"

export default function DialogPage(): JSX.Element {
  return (
    <Column>
      <Dialog.Root>
        <Dialog.Trigger render={<Button>View notifications</Button>} />
        <Dialog.Portal>
          <Dialog.Backdrop className="
            fixed inset-0 min-h-dvh bg-gray-12 opacity-20 transition-all
            duration-150
            data-ending-style:opacity-0
            data-starting-style:opacity-0
            supports-[-webkit-touch-callout:none]:absolute
          " />
          <Dialog.Popup className="
            max-w-448 rounded-lg
            dark:outline-gray-300
            fixed top-1/2 left-1/2 -mt-8 w-full -translate-x-1/2
            -translate-y-1/2 bg-gray-1 p-6 transition-all duration-150
            data-ending-style:scale-90 data-ending-style:opacity-0
            data-starting-style:scale-90 data-starting-style:opacity-0
          ">
            <Dialog.Title className="-mt-1.5 text-lg font-medium mb-1">Notifications</Dialog.Title>
            <Dialog.Description className="text-base text-gray-600 mb-6">
              You are all caught up. Good job!
            </Dialog.Description>
            <div className="flex justify-end gap-4">
              <Dialog.Close render={<Button>Close</Button>} />
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </Column>
  )
}
