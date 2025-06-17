import { Button } from "@nattui/react-components";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-16">
      <p>Size</p>
      <div className="flex gap-4 items-center">
        <Button size={32}>Click me</Button>
        <Button size={36}>Click me</Button>
        <Button size={40}>Click me</Button>
        <Button size={48}>Click me</Button>
      </div>

      <p>Variant</p>
      <div className="flex gap-4 items-center">
        <Button variant="primary">Click me</Button>
        <Button variant="secondary">Click me</Button>
        <Button variant="ghost">Click me</Button>
        <Button variant="accent">Click me</Button>
      </div>

      <p>Rounded</p>
      <div className="flex gap-4 items-center">
        <Button rounded variant="primary">
          Click me
        </Button>
        <Button rounded variant="secondary">
          Click me
        </Button>
        <Button rounded variant="ghost">
          Click me
        </Button>
        <Button rounded variant="accent">
          Click me
        </Button>
      </div>
    </div>
  );
}
