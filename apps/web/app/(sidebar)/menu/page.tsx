"use client"

import { LucideCoins, LucidePlus, LucideRadio } from "@nattstack/icons"
import { Button, Column, Label, Spacer } from "@nattstack/ui/react"
import Link from "next/link"
import { DropdownMenu } from "@/components/dropdown-menu/dropdown-menu"
import { DropdownMenuContent } from "@/components/dropdown-menu/dropdown-menu-content"
import { DropdownMenuItem } from "@/components/dropdown-menu/dropdown-menu-item"
import { DropdownMenuTrigger } from "@/components/dropdown-menu/dropdown-menu-trigger"

export default function MenuPage() {
  function onNewCoin() {
    console.log("New coin")
  }

  function onGoLive() {
    console.log("Go live")
  }

  return (
    <Column>
      <Label>Dropdown menu</Label>
      <Spacer height={4} />
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button iconStart={<LucidePlus size={20} />} size={36} variant="secondary">
              Create
            </Button>
          }
        />
        <DropdownMenuContent align="start" className="w-144">
          <DropdownMenuItem onClick={onNewCoin}>
            <LucideCoins size={20} />
            New coin
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onGoLive} render={<Link href="/" />}>
            <LucideRadio size={20} />
            Go live
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Column>
  )
}
