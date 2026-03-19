import {
  Spacer,
  Tabs,
  TabsPanel,
  TabsPillList,
  TabsPillTab,
  TabsSegmentedList,
  TabsSegmentedTab,
  TabsUnderlineList,
  TabsUnderlineTab,
} from "@nattstack/ui/react"

export default function Page() {
  return (
    <>
      <Tabs>
        <TabsSegmentedList>
          <TabsSegmentedTab value="system">⚙️ System</TabsSegmentedTab>
          <TabsSegmentedTab value="light">☀️ Light</TabsSegmentedTab>
          <TabsSegmentedTab value="dark">🌙 Dark</TabsSegmentedTab>
        </TabsSegmentedList>
        <Spacer height={16} />

        <TabsPanel value="system">⚙️ System</TabsPanel>
        <TabsPanel value="light">☀️ Light</TabsPanel>
        <TabsPanel value="dark">🌙 Dark</TabsPanel>
      </Tabs>
      <Spacer height={64} />

      <Tabs>
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

      <Tabs>
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
