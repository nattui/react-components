import { Input } from "@nattui/react-components"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
    },
    isActive: { control: "boolean" },
    isDisabled: { control: "boolean" },
    placeholder: { control: "text" },
    value: { control: "text" },
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
}

export const WithValue: Story = {
  args: {
    value: "Sample text",
    placeholder: "Enter text...",
  },
}

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email...",
  },
}

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password...",
  },
}

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number...",
  },
}

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
}

export const Tel: Story = {
  args: {
    type: "tel",
    placeholder: "Enter phone number...",
  },
}

export const URL: Story = {
  args: {
    type: "url",
    placeholder: "Enter URL...",
  },
}

export const Active: Story = {
  args: {
    placeholder: "Active input",
    isActive: true,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    isDisabled: true,
  },
}

export const DisabledWithValue: Story = {
  args: {
    value: "Cannot edit this",
    isDisabled: true,
  },
}

export const Required: Story = {
  args: {
    placeholder: "Required field",
    required: true,
  },
}

export const WithMaxLength: Story = {
  args: {
    placeholder: "Max 10 characters",
    maxLength: 10,
  },
}

export const ReadOnly: Story = {
  args: {
    value: "Read-only value",
    isReadOnly: true,
  },
}
