import { Input } from "@nattui/react-components"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

const meta = {
  argTypes: {
    isActive: { control: "boolean" },
    isDisabled: { control: "boolean" },
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
    },
    value: { control: "text" },
  },
  args: {
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
  },
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Input",
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
    placeholder: "Enter text...",
    value: "Sample text",
  },
}

export const Email: Story = {
  args: {
    placeholder: "Enter your email...",
    type: "email",
  },
}

export const Password: Story = {
  args: {
    placeholder: "Enter your password...",
    type: "password",
  },
}

export const Number: Story = {
  args: {
    placeholder: "Enter a number...",
    type: "number",
  },
}

export const Search: Story = {
  args: {
    placeholder: "Search...",
    type: "search",
  },
}

export const Tel: Story = {
  args: {
    placeholder: "Enter phone number...",
    type: "tel",
  },
}

export const URL: Story = {
  args: {
    placeholder: "Enter URL...",
    type: "url",
  },
}

export const Active: Story = {
  args: {
    isActive: true,
    placeholder: "Active input",
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: "Disabled input",
  },
}

export const DisabledWithValue: Story = {
  args: {
    isDisabled: true,
    value: "Cannot edit this",
  },
}

export const Required: Story = {
  args: {
    isRequired: true,
    placeholder: "Required field",
  },
}

export const WithMaxLength: Story = {
  args: {
    maxLength: 10,
    placeholder: "Max 10 characters",
  },
}

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
    value: "Read-only value",
  },
}
