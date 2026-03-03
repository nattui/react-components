import { LucideCoins, LucidePlus, LucideRadio } from "@nattui/icons"
import { Button, Column, Label, Spacer } from "@nattui/react-components"
import { DropdownMenu } from "@/components/dropdown-menu/dropdown-menu"
import { DropdownMenuContent } from "@/components/dropdown-menu/dropdown-menu-content"
import { DropdownMenuItem } from "@/components/dropdown-menu/dropdown-menu-item"
import { DropdownMenuTrigger } from "@/components/dropdown-menu/dropdown-menu-trigger"

export default function MenuPage() {
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
          <DropdownMenuItem>
            <LucideCoins size={20} />
            New coin
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LucideRadio size={20} />
            Go live
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Column>
  )
}
