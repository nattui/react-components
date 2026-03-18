import { Button, Spacer, Tabs, TabsPanel, TabsPillList, TabsPillTab } from "@nattstack/ui/react"

export default function Page() {
  return (
    <>
      <p>adsf</p>
      <p>adsf</p>
      <Spacer height={16} />

      <Button variant="accent">Click me</Button>
      <Spacer height={16} />

      <Tabs>
        <TabsPillList>
          <TabsPillTab value="cat">Cat</TabsPillTab>
          <TabsPillTab value="fox">Fox</TabsPillTab>
          <TabsPillTab value="lion">Lion</TabsPillTab>
          <TabsPillTab value="dog">Dog</TabsPillTab>
          <TabsPillTab value="tiger">Tiger</TabsPillTab>
          <TabsPillTab value="panda">Panda</TabsPillTab>
          <TabsPillTab value="koala">Koala</TabsPillTab>
          <TabsPillTab value="monkey">Monkey</TabsPillTab>
          <TabsPillTab value="frog">Frog</TabsPillTab>
        </TabsPillList>

        <Spacer height={16} />

        <TabsPanel value="cat">🐱</TabsPanel>
        <TabsPanel value="fox">🦊</TabsPanel>
        <TabsPanel value="lion">🦁</TabsPanel>
        <TabsPanel value="dog">🐶</TabsPanel>
        <TabsPanel value="tiger">🐯</TabsPanel>
        <TabsPanel value="panda">🐼</TabsPanel>
        <TabsPanel value="koala">🐨</TabsPanel>
        <TabsPanel value="monkey">🐵</TabsPanel>
        <TabsPanel value="frog">🐸</TabsPanel>
      </Tabs>
    </>
  )
}
