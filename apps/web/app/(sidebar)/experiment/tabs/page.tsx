import {
  LucideArrowDown as IconArrowDown,
  LucideArrowLeft as IconArrowLeft,
  LucideArrowRight as IconArrowRight,
  LucideArrowUp as IconArrowUp,
  LucideMonitor,
  LucideMoon,
  LucideSun,
} from "@nattstack/icons"
import {
  Button,
  Row,
  Spacer,
  Tabs,
  TabsPanel,
  TabsPillList,
  TabsPillTab,
  TabsSegmentedList,
  TabsSegmentedTab,
  TabsUnderlineList,
  TabsUnderlineTab,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@nattstack/ui/react"

export default function Page() {
  return (
    <>
      <Row>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button isIconOnly>
                <IconArrowUp size={16} />
              </Button>
            }
          />
          <TooltipContent side="top">Top side</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button isIconOnly>
                <IconArrowDown size={16} />
              </Button>
            }
          />
          <TooltipContent side="bottom">Bottom side</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button isIconOnly>
                <IconArrowLeft size={16} />
              </Button>
            }
          />
          <TooltipContent side="left">Left end</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button isIconOnly>
                <IconArrowRight size={16} />
              </Button>
            }
          />
          <TooltipContent side="right">Right side</TooltipContent>
        </Tooltip>
      </Row>

      <Spacer height={16} />

      <Tabs defaultValue="system">
        <TabsSegmentedList>
          <TabsSegmentedTab value="system">
            <LucideMonitor size={16} /> System
          </TabsSegmentedTab>
          <TabsSegmentedTab value="light">
            <LucideSun size={16} /> Light
          </TabsSegmentedTab>
          <TabsSegmentedTab value="dark">
            <LucideMoon size={16} /> Dark
          </TabsSegmentedTab>
        </TabsSegmentedList>
        <Spacer height={16} />

        <TabsPanel value="system">⚙️ System</TabsPanel>
        <TabsPanel value="light">☀️ Light</TabsPanel>
        <TabsPanel value="dark">🌙 Dark</TabsPanel>
      </Tabs>
      <Spacer height={64} />

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
