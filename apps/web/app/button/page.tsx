import { LucideArrowLeft, LucideArrowRight, LucideDownload } from "@nattui/icons"
import { Button, ButtonLink, Column, Label, Row, Spacer } from "@nattui/react-components"
import Link from "next/link"

export default function ButtonPage() {
  return (
    <Column>
      <Button className="absolute top-64 right-64">Absolute</Button>

      <Label>Variant</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
        <Button variant="accent">Accent</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </Row>
      <Spacer height={16} />

      <Label>Size</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
        <Button size={32}>Add goal</Button>
        <Button size={36}>Add goal</Button>
        <Button size={40}>Add goal</Button>
        <Button size={44}>Add goal</Button>
        <Button size={48}>Add goal</Button>
      </Row>
      <Spacer height={16} />

      <Label>Rounded</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
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
      </Row>
      <Spacer height={16} />

      <Label>Disabled</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
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
      </Row>
      <Spacer height={16} />

      <Label>Loading</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
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
      </Row>
      <Spacer height={16} />

      <Label>Active</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
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
      </Row>
      <Spacer height={16} />

      <Label>Icon</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
        <Button
          iconEnd={<LucideArrowRight size={16} />}
          iconStart={<LucideArrowLeft size={16} />}
          variant="accent"
        >
          Add goal
        </Button>
        <Button
          iconEnd={<LucideArrowRight size={16} />}
          iconStart={<LucideArrowLeft size={16} />}
          variant="primary"
        >
          Add goal
        </Button>
        <Button
          iconEnd={<LucideArrowRight size={16} />}
          iconStart={<LucideArrowLeft size={16} />}
          variant="secondary"
        >
          Add goal
        </Button>
        <Button
          iconEnd={<LucideArrowRight size={16} />}
          iconStart={<LucideArrowLeft size={16} />}
          variant="ghost"
        >
          Add goal
        </Button>
      </Row>
      <Spacer height={16} />

      <Label>Full width</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
        <Button className="max-w-320" isFullWidth>
          Add goal
        </Button>
      </Row>
      <Spacer height={16} />

      <Label>Icon only</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
        <Button isIconOnly variant="accent">
          <LucideDownload size={16} />
        </Button>
        <Button isIconOnly variant="primary">
          <LucideDownload size={16} />
        </Button>
        <Button isIconOnly variant="secondary">
          <LucideDownload size={16} />
        </Button>
        <Button isIconOnly variant="ghost">
          <LucideDownload size={16} />
        </Button>
      </Row>
      <Spacer height={16} />

      <Label>Icon only size</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
        <Button isIconOnly size={32}>
          <LucideDownload size={16} />
        </Button>
        <Button isIconOnly size={36}>
          <LucideDownload size={16} />
        </Button>
        <Button isIconOnly size={40}>
          <LucideDownload size={16} />
        </Button>
        <Button isIconOnly size={44}>
          <LucideDownload size={18} />
        </Button>
        <Button isIconOnly size={48}>
          <LucideDownload size={18} />
        </Button>
      </Row>
      <Spacer height={16} />

      <Label>Icon only loading</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
        <Button isIconOnly isLoading size={32}>
          <LucideDownload size={16} />
        </Button>
        <Button isIconOnly isLoading size={36}>
          <LucideDownload size={16} />
        </Button>
        <Button isIconOnly isLoading size={40}>
          <LucideDownload size={16} />
        </Button>
        <Button isIconOnly isLoading size={44}>
          <LucideDownload size={18} />
        </Button>
        <Button isIconOnly isLoading size={48}>
          <LucideDownload size={18} />
        </Button>
      </Row>
      <Spacer height={16} />

      <Label>Link button</Label>
      <Spacer height={4} />
      <Row alignItems="center" flexWrap="wrap" gap={16}>
        <ButtonLink href="https://google.com" target="_blank" variant="accent">
          google.com
        </ButtonLink>
        <ButtonLink as={Link} href="/input" variant="accent">
          /input
        </ButtonLink>
      </Row>
    </Column>
  )
}
