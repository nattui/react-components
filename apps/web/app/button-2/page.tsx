import { Button2 } from "@nattui/react-components"

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-16">
      <Button2 className="absolute top-64 right-64">Absolute</Button2>

      <p>Variant</p>
      <div className="flex flex-wrap items-center gap-16">
        <Button2 variant="accent">Accent</Button2>
        <Button2 variant="primary">Primary</Button2>
        <Button2 variant="secondary">Secondary</Button2>
        <Button2 variant="ghost">Ghost</Button2>
        <Button2 disabled>Primary</Button2>
      </div>
    </div>
  )
}
