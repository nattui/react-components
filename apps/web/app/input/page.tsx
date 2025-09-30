import { Input } from "@nattui/react-components"

export default function InputPage() {
  return (
    <div className="flex flex-col gap-4 p-16">
      <label htmlFor="name">Name</label>
      <Input id="name" placeholder="Enter your name" />
      <label htmlFor="email">Email</label>
      <Input id="email" placeholder="Enter your email" />
      <Input disabled placeholder="Disabled" />
    </div>
  )
}
