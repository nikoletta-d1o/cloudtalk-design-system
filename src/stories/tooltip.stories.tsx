import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../components/tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "lg"],
    },
    arrow: {
      control: "select",
      options: [
        undefined,
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
        "left",
        "right",
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="p-16 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Tooltip", size: "lg", arrow: "bottom-center" },
};

export const Small: Story = {
  args: { children: "Tooltip", size: "sm", arrow: "bottom-center" },
};

export const Large: Story = {
  args: { children: "Tooltip", size: "lg", arrow: "bottom-center" },
};

export const NoArrow: Story = {
  args: { children: "Tooltip", size: "lg" },
};

export const AllArrowPositions: Story = {
  name: "All Arrow Positions",
  render: () => (
    <div className="grid grid-cols-3 gap-12 items-center justify-items-center">
      <Tooltip size="lg" arrow="top-left">
        top-left
      </Tooltip>
      <Tooltip size="lg" arrow="top-center">
        top-center
      </Tooltip>
      <Tooltip size="lg" arrow="top-right">
        top-right
      </Tooltip>
      <Tooltip size="lg" arrow="left">
        left
      </Tooltip>
      <Tooltip size="lg">no arrow</Tooltip>
      <Tooltip size="lg" arrow="right">
        right
      </Tooltip>
      <Tooltip size="lg" arrow="bottom-left">
        bottom-left
      </Tooltip>
      <Tooltip size="lg" arrow="bottom-center">
        bottom-center
      </Tooltip>
      <Tooltip size="lg" arrow="bottom-right">
        bottom-right
      </Tooltip>
    </div>
  ),
};

export const SizeComparison: Story = {
  name: "Size Comparison",
  render: () => (
    <div className="flex items-center gap-6">
      <Tooltip size="lg" arrow="bottom-center">
        Large
      </Tooltip>
      <Tooltip size="sm" arrow="bottom-center">
        Small
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  name: "Long Content",
  render: () => (
    <div className="flex flex-col items-start gap-6">
      <Tooltip size="lg" arrow="bottom-left">
        This is a longer tooltip message
      </Tooltip>
      <Tooltip size="sm" arrow="top-center">
        Multi-word tooltip
      </Tooltip>
    </div>
  ),
};
