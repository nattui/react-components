import { Button, Column, Label, Row, Spacer } from "@nattui/react-components"

export default function MenuPage() {
  return (
    <Column>
      <Label>Variant</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
        <Button variant="accent">Accent</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </Row>
      <Spacer height={16} />
    </Column>
  )
}
