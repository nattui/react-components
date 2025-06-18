import { Button } from "@nattui/react-components";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-16">
      <p>Variant</p>
      <div className="flex gap-4 items-center">
        <Button variant="accent">Accent</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <p>Size</p>
      <div className="flex gap-4 items-center">
        <Button size={32}>Add goal</Button>
        <Button size={36}>Add goal</Button>
        <Button size={40}>Add goal</Button>
        <Button size={48}>Add goal</Button>
      </div>

      <p>Rounded</p>
      <div className="flex gap-4 items-center">
        <Button rounded variant="accent">
          Add goal
        </Button>
        <Button rounded variant="primary">
          Add goal
        </Button>
        <Button rounded variant="secondary">
          Add goal
        </Button>
        <Button rounded variant="ghost">
          Add goal
        </Button>
      </div>

      <p>Disabled</p>
      <div className="flex gap-4 items-center">
        <Button disabled variant="accent">
          Add goal
        </Button>
        <Button disabled variant="primary">
          Add goal
        </Button>
        <Button disabled variant="secondary">
          Add goal
        </Button>
        <Button disabled variant="ghost">
          Add goal
        </Button>
      </div>

      <p>Loading</p>
      <div className="flex gap-4 items-center">
        <Button isLoading variant="accent">
          Add goal
        </Button>
        <Button isLoading variant="primary">
          Add goal
        </Button>
        <Button isLoading variant="secondary">
          Add goal
        </Button>
        <Button isLoading variant="ghost">
          Add goal
        </Button>
      </div>

      <p>Active</p>
      <div className="flex gap-4 items-center">
        <Button aria-pressed variant="accent">
          Add goal
        </Button>
        <Button aria-pressed variant="primary">
          Add goal
        </Button>
        <Button aria-pressed variant="secondary">
          Add goal
        </Button>
        <Button aria-pressed variant="ghost">
          Add goal
        </Button>
      </div>

      <p>Icon</p>
      <div className="flex gap-4 items-center">
        <Button
          iconStart={<LucideArrowLeft size={16} />}
          iconEnd={<LucideArrowRight size={16} />}
          variant="accent"
        >
          Add goal
        </Button>
        <Button
          iconStart={<LucideArrowLeft size={16} />}
          iconEnd={<LucideArrowRight size={16} />}
          variant="primary"
        >
          Add goal
        </Button>
        <Button
          iconStart={<LucideArrowLeft size={16} />}
          iconEnd={<LucideArrowRight size={16} />}
          variant="secondary"
        >
          Add goal
        </Button>
        <Button
          iconStart={<LucideArrowLeft size={16} />}
          iconEnd={<LucideArrowRight size={16} />}
          variant="ghost"
        >
          Add goal
        </Button>
      </div>

      <Button className="!absolute top-16 right-16">Absolute</Button>
    </div>
  );
}
