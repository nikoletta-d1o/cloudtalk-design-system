import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedControl } from "../components/segmented-control";

const meta = {
  title: "Components/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

const TwoOptions = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
];

const ThreeOptions = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

const FourOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Paused", value: "paused" },
  { label: "Ended", value: "ended" },
];

const FiveOptions = [
  { label: "1D", value: "1d" },
  { label: "1W", value: "1w" },
  { label: "1M", value: "1m" },
  { label: "3M", value: "3m" },
  { label: "1Y", value: "1y" },
];

export const Default: Story = {
  args: {
    options: TwoOptions,
    value: "a",
    onChange: () => {},
  },
};

function InteractiveDemo({
  options,
  defaultValue,
}: {
  options: { label: string; value: string }[];
  defaultValue: string;
}) {
  const [value, setValue] = useState(defaultValue);
  return <SegmentedControl options={options} value={value} onChange={setValue} />;
}

export const Interactive: Story = {
  render: () => <InteractiveDemo options={ThreeOptions} defaultValue="daily" />,
};

export const TwoOptionsStory: Story = {
  name: "2 Options",
  render: () => <InteractiveDemo options={TwoOptions} defaultValue="a" />,
};

export const ThreeOptionsStory: Story = {
  name: "3 Options",
  render: () => (
    <InteractiveDemo options={ThreeOptions} defaultValue="daily" />
  ),
};

export const FourOptionsStory: Story = {
  name: "4 Options",
  render: () => <InteractiveDemo options={FourOptions} defaultValue="all" />,
};

export const FiveOptionsStory: Story = {
  name: "5 Options",
  render: () => <InteractiveDemo options={FiveOptions} defaultValue="1d" />,
};

export const AllVariants: Story = {
  name: "All Option Counts",
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          2 Options
        </p>
        <InteractiveDemo options={TwoOptions} defaultValue="a" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          3 Options
        </p>
        <InteractiveDemo options={ThreeOptions} defaultValue="daily" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          4 Options
        </p>
        <InteractiveDemo options={FourOptions} defaultValue="all" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          5 Options
        </p>
        <InteractiveDemo options={FiveOptions} defaultValue="1d" />
      </div>
    </div>
  ),
};
