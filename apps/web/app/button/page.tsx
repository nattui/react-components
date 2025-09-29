import { Button } from "@nattui/react-components"
import { LucideArrowLeft, LucideArrowRight, LucideDownload } from "lucide-react"

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-4 p-16">
      <Button className="!absolute top-16 right-16">Absolute</Button>

      <p>Variant</p>
      <div className="flex gap-4 items-center flex-wrap">
        <Button variant="accent">Accent</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <p>Size</p>
      <div className="flex gap-4 items-center flex-wrap">
        <Button size={32}>Add goal</Button>
        <Button size={36}>Add goal</Button>
        <Button size={40}>Add goal</Button>
        <Button size={48}>Add goal</Button>
      </div>

      <p>Rounded</p>
      <div className="flex gap-4 items-center flex-wrap">
        <Button isRounded variant="accent">
          Add goal
        </Button>
        <Button isRounded variant="primary">
          Add goal
        </Button>
        <Button isRounded variant="secondary">
          Add goal
        </Button>
        <Button isRounded variant="ghost">
          Add goal
        </Button>
      </div>

      <p>Disabled</p>
      <div className="flex gap-4 items-center flex-wrap">
        <Button isDisabled variant="accent">
          Add goal
        </Button>
        <Button isDisabled variant="primary">
          Add goal
        </Button>
        <Button isDisabled variant="secondary">
          Add goal
        </Button>
        <Button isDisabled variant="ghost">
          Add goal
        </Button>
      </div>

      <p>Loading</p>
      <div className="flex gap-4 items-center flex-wrap">
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
      <div className="flex gap-4 items-center flex-wrap">
        <Button isActive variant="accent">
          Add goal
        </Button>
        <Button isActive variant="primary">
          Add goal
        </Button>
        <Button isActive variant="secondary">
          Add goal
        </Button>
        <Button isActive variant="ghost">
          Add goal
        </Button>
      </div>

      <p>Icon</p>
      <div className="flex gap-4 items-center flex-wrap">
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

      <p>Full width</p>
      <div className="flex gap-4 items-center flex-wrap">
        <Button className="max-w-xs" fullWidth>
          Add goal
        </Button>
      </div>

      <p>Icon only</p>
      <div className="flex gap-4 items-center flex-wrap">
        <Button iconOnly variant="accent">
          <LucideDownload size={16} />
        </Button>
        <Button iconOnly variant="primary">
          <LucideDownload size={16} />
        </Button>
        <Button iconOnly variant="secondary">
          <LucideDownload size={16} />
        </Button>
        <Button iconOnly variant="ghost">
          <LucideDownload size={16} />
        </Button>
      </div>

      <p>Icon only size</p>
      <div className="flex gap-4 items-center flex-wrap">
        <Button iconOnly size={32}>
          <LucideDownload size={16} />
        </Button>
        <Button iconOnly size={36}>
          <LucideDownload size={16} />
        </Button>
        <Button iconOnly size={40}>
          <LucideDownload size={16} />
        </Button>
        <Button iconOnly size={48}>
          <LucideDownload size={18} />
        </Button>
      </div>
    </div>
  )
}
