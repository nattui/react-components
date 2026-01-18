"use client"

import { Switch } from "@nattui/react-components"

export default function SwitchPage() {
  return (
    <div className="flex flex-col gap-16">
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
    </div>
  )
}
