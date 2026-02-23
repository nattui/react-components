"use client"

import { Column, Label, Row, Switch } from "@nattui/react-components"

export default function SwitchPage() {
  return (
    <Column gapY={16}>
      <Switch />
      <Switch isDefaultChecked />
      <Switch isDisabled />
      <Switch isDefaultChecked isDisabled />

      <Switch isReadOnly />
      <Switch isRequired />

      <Label>Size</Label>
      <Row alignItems="center" flexWrap="wrap" gap={16}>
        <Switch size={14} />
        <Switch size={24} />
      </Row>

      <Label className="flex items-center gap-x-8" htmlFor="switch-with-label">
        Switch with label
        <Switch id="switch-with-label" />
      </Label>
    </Column>
  )
}
