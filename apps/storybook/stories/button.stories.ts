import { Button } from "@nattui/react-components";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["accent", "primary", "secondary", "ghost"],
    },
    size: { control: "select", options: [32, 36, 40, 48] },
    isDisabled: { control: "boolean" },
    isLoading: { control: "boolean" },
    rounded: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
