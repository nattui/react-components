import { Button } from "@nattui/react-components";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-16">
      <p>Size</p>
      <div className="flex gap-4 items-center">
        <Button size={32}>Add goal</Button>
        <Button size={36}>Add goal</Button>
        <Button size={40}>Add goal</Button>
        <Button size={48}>Add goal</Button>
      </div>

      <p>Variant</p>
      <div className="flex gap-4 items-center">
        <Button variant="primary">Add goal</Button>
        <Button variant="secondary">Add goal</Button>
        <Button variant="ghost">Add goal</Button>
        <Button variant="accent">Add goal</Button>
      </div>

      <p>Rounded</p>
      <div className="flex gap-4 items-center">
        <Button rounded variant="primary">
          Add goal
        </Button>
        <Button rounded variant="secondary">
          Add goal
        </Button>
        <Button rounded variant="ghost">
          Add goal
        </Button>
        <Button rounded variant="accent">
          Add goal
        </Button>
      </div>

      <p>Disabled</p>
      <div className="flex gap-4 items-center">
        <Button disabled variant="primary">
          Add goal
        </Button>
        <Button disabled variant="secondary">
          Add goal
        </Button>
        <Button disabled variant="ghost">
          Add goal
        </Button>
        <Button disabled variant="accent">
          Add goal
        </Button>
      </div>

      <p>Loading</p>
      <div className="flex gap-4 items-center">
        <Button isLoading variant="primary">
          Add goal
        </Button>
        <Button isLoading variant="secondary">
          Add goal
        </Button>
        <Button isLoading variant="ghost">
          Add goal
        </Button>
        <Button isLoading variant="accent">
          Add goal
        </Button>
      </div>
    </div>
  );
}
