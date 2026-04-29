"use client"

import {
  LucideArrowDown as IconArrowDown,
  LucideArrowLeft as IconArrowLeft,
  LucideArrowRight as IconArrowRight,
  LucideArrowUp as IconArrowUp,
} from "@nattstack/icons"
import {
  Button,
  DialogResponsive,
  DialogResponsivePopup,
  DialogResponsiveTrigger,
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuTrigger,
  Row,
  Spacer,
  Switch,
  Tabs,
  TabsPanel,
  TabsPillList,
  TabsPillTab,
  TabsUnderlineList,
  TabsUnderlineTab,
  Textarea,
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
  OTPField,
  OTPFieldInput,
} from "@nattstack/ui"
import type { JSX } from "react"

export default function Page(): JSX.Element {
  const OTP_LENGTH = 6

  return (
    <>
      <Menu>
        <MenuTrigger>Open menu</MenuTrigger>
        <MenuContent>
          <MenuGroup>
            <MenuGroupLabel>Actions</MenuGroupLabel>
            <MenuItem>New tab</MenuItem>
            <MenuItem>Duplicate tab</MenuItem>
            <MenuItem isDisabled>Rename tab</MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuCheckboxItem isDefaultChecked>Show indicators</MenuCheckboxItem>
          <MenuSeparator />
          <MenuGroup>
            <MenuGroupLabel>Density</MenuGroupLabel>
            <MenuRadioGroup defaultValue="comfortable">
              <MenuRadioItem value="compact">Compact</MenuRadioItem>
              <MenuRadioItem value="comfortable">Comfortable</MenuRadioItem>
              <MenuRadioItem value="spacious">Spacious</MenuRadioItem>
            </MenuRadioGroup>
          </MenuGroup>
          <MenuSeparator />
          <MenuSubmenu>
            <MenuSubmenuTrigger>More actions</MenuSubmenuTrigger>
            <MenuContent align="start" side="right">
              <MenuItem>Move left</MenuItem>
              <MenuItem>Move right</MenuItem>
              <MenuItem>Close others</MenuItem>
            </MenuContent>
          </MenuSubmenu>
        </MenuContent>
      </Menu>
      <Spacer height={64} />

      <OTPField length={OTP_LENGTH}>
        {Array.from({ length: OTP_LENGTH }, (_, index) => (
          <OTPFieldInput key={index} />
        ))}
      </OTPField>

      <Spacer height={64} />

      <Textarea rows={3} />
      <Spacer height={64} />

      <DialogResponsive>
        <DialogResponsiveTrigger render={<Button>Open dialog</Button>} />
        <DialogResponsivePopup>
          <img
            alt="Cat"
            className="aspect-16-9 rounded-[12px] object-cover select-none max-[640px]:rounded-[20px]"
            draggable={false}
            src="https://placecats.com/640/480"
          />
          <Spacer height={24} />
          <p className="font-700 text-24 text-gray-12 text-center">Welcome to Natt UI!</p>
          <Spacer height={16} />
          <p className="text-center">Natt UI allows anyone to create their own components.</p>
          <p className="text-center">
            Everyone has equal access meaning buy and sell when a component is first created.
          </p>
          <Spacer height={24} />
          <Button isFullWidth size={48}>
            Continue
          </Button>
          <Spacer height={16} />
          <p className="text-12 mx-auto max-w-[480px] text-center">
            By clicking this button, you agree to the Terms and Conditions, Privacy Policy, and
            certify that you are over 18 years old.
          </p>
        </DialogResponsivePopup>
      </DialogResponsive>
      <Spacer height={64} />

      <Switch />
      <Spacer height={16} />
      <Switch isChecked />
      <Spacer height={16} />
      <Switch isDisabled />
      <Spacer height={16} />
      <Switch isChecked isDisabled />
      <Spacer height={64} />

      <Row className="flex-wrap" gap={8}>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button isIconOnly>
                <IconArrowUp />
              </Button>
            }
          />
          <TooltipPopup side="top">Top side</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button isIconOnly>
                <IconArrowDown />
              </Button>
            }
          />
          <TooltipPopup side="bottom">Bottom side</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button isIconOnly>
                <IconArrowLeft />
              </Button>
            }
          />
          <TooltipPopup side="left">Left side</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button isIconOnly>
                <IconArrowRight />
              </Button>
            }
          />
          <TooltipPopup side="right">Right side</TooltipPopup>
        </Tooltip>
      </Row>
      <Spacer height={16} />

      <Tabs defaultValue="cat">
        <TabsPillList>
          <TabsPillTab value="cat">🐱 Cat</TabsPillTab>
          <TabsPillTab value="fox">🦊 Fox</TabsPillTab>
          <TabsPillTab value="lion">🦁 Lion</TabsPillTab>
          <TabsPillTab value="dog">🐶 Dog</TabsPillTab>
          <TabsPillTab value="tiger">🐯 Tiger</TabsPillTab>
          <TabsPillTab value="panda">🐼 Panda</TabsPillTab>
          <TabsPillTab value="koala">🐨 Koala</TabsPillTab>
          <TabsPillTab value="monkey">🐵 Monkey</TabsPillTab>
          <TabsPillTab value="frog">🐸 Frog</TabsPillTab>
        </TabsPillList>
        <Spacer height={16} />

        <TabsPanel value="cat">🐱 Cat</TabsPanel>
        <TabsPanel value="fox">🦊 Fox</TabsPanel>
        <TabsPanel value="lion">🦁 Lion</TabsPanel>
        <TabsPanel value="dog">🐶 Dog</TabsPanel>
        <TabsPanel value="tiger">🐯 Tiger</TabsPanel>
        <TabsPanel value="panda">🐼 Panda</TabsPanel>
        <TabsPanel value="koala">🐨 Koala</TabsPanel>
        <TabsPanel value="monkey">🐵 Monkey</TabsPanel>
        <TabsPanel value="frog">🐸 Frog</TabsPanel>
      </Tabs>
      <Spacer height={64} />

      <Tabs defaultValue="cat">
        <TabsUnderlineList>
          <TabsUnderlineTab value="cat">🐱 Cat</TabsUnderlineTab>
          <TabsUnderlineTab value="fox">🦊 Fox</TabsUnderlineTab>
          <TabsUnderlineTab value="lion">🦁 Lion</TabsUnderlineTab>
          <TabsUnderlineTab value="dog">🐶 Dog</TabsUnderlineTab>
          <TabsUnderlineTab value="tiger">🐯 Tiger</TabsUnderlineTab>
          <TabsUnderlineTab value="panda">🐼 Panda</TabsUnderlineTab>
          <TabsUnderlineTab value="koala">🐨 Koala</TabsUnderlineTab>
          <TabsUnderlineTab value="monkey">🐵 Monkey</TabsUnderlineTab>
          <TabsUnderlineTab value="frog">🐸 Frog</TabsUnderlineTab>
        </TabsUnderlineList>
        <Spacer height={16} />

        <TabsPanel value="cat">🐱 Cat</TabsPanel>
        <TabsPanel value="fox">🦊 Fox</TabsPanel>
        <TabsPanel value="lion">🦁 Lion</TabsPanel>
        <TabsPanel value="dog">🐶 Dog</TabsPanel>
        <TabsPanel value="tiger">🐯 Tiger</TabsPanel>
        <TabsPanel value="panda">🐼 Panda</TabsPanel>
        <TabsPanel value="koala">🐨 Koala</TabsPanel>
        <TabsPanel value="monkey">🐵 Monkey</TabsPanel>
        <TabsPanel value="frog">🐸 Frog</TabsPanel>
      </Tabs>
    </>
  )
}
