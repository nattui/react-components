// oxlint-disable import/max-dependencies

import { Button, Column, Label, Spacer } from "@nattui/react-components"
import { DropdownMenu } from "@/components/dropdown-menu/dropdown-menu"
import { DropdownMenuContent } from "@/components/dropdown-menu/dropdown-menu-content"
import { DropdownMenuGroup } from "@/components/dropdown-menu/dropdown-menu-group"
import { DropdownMenuItem } from "@/components/dropdown-menu/dropdown-menu-item"
import { DropdownMenuLabel } from "@/components/dropdown-menu/dropdown-menu-label"
import { DropdownMenuPortal } from "@/components/dropdown-menu/dropdown-menu-portal"
import { DropdownMenuSeparator } from "@/components/dropdown-menu/dropdown-menu-separator"
import { DropdownMenuShortcut } from "@/components/dropdown-menu/dropdown-menu-shortcut"
import { DropdownMenuSub } from "@/components/dropdown-menu/dropdown-menu-sub"
import { DropdownMenuSubContent } from "@/components/dropdown-menu/dropdown-menu-sub-context"
import { DropdownMenuSubTrigger } from "@/components/dropdown-menu/dropdown-menu-sub-trigger"
import { DropdownMenuTrigger } from "@/components/dropdown-menu/dropdown-menu-trigger"

export default function MenuPage() {
  return (
    <Column>
      <Label>Menu</Label>
      <Spacer height={4} />
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="primary">Open</Button>} />
        <DropdownMenuContent align="start" className="w-40">
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Spacer height={16} />
    </Column>
  )
}
