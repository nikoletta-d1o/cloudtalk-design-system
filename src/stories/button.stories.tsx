import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";
import { ArrowRight } from "lucide-react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outline", "ghost", "icon"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary Button", variant: "primary", size: "md" },
};

export const Outline: Story = {
  args: { children: "Outline Button", variant: "outline", size: "md" },
};

export const Ghost: Story = {
  args: { children: "Ghost Button", variant: "ghost", size: "md" },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    size: "icon",
    children: <ArrowRight className="h-4 w-4" />,
    "aria-label": "Next",
  },
};

export const Small: Story = {
  args: { children: "Small", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "Large Button", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Disabled", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="icon" size="icon" aria-label="Action">
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  ),
};
