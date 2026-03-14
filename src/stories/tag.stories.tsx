import type { Meta, StoryObj } from "@storybook/react";
import { Tag, TagGroup } from "../components/tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: [
        "grey",
        "blue",
        "cyan",
        "green",
        "indigo",
        "brown",
        "yellow",
        "pink",
      ],
    },
    selected: {
      control: "boolean",
    },
    aiAssigned: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Tag", size: "md", color: "grey" },
};

export const AiAssigned: Story = {
  args: { children: "Salesforce", size: "md", color: "grey", aiAssigned: true },
};

export const Removable: Story = {
  args: {
    children: "Tag",
    size: "md",
    color: "grey",
    onRemove: () => alert("Remove clicked"),
  },
};

export const Selected: Story = {
  args: { children: "Tag", size: "md", color: "grey", selected: true },
};

const TAG_COLORS = [
  "grey",
  "blue",
  "cyan",
  "green",
  "indigo",
  "brown",
  "yellow",
  "pink",
] as const;

export const AllColors: Story = {
  name: "All Colors",
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      {TAG_COLORS.map((color) => (
        <Tag key={color} color={color}>
          {color}
        </Tag>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const AllSizesAi: Story = {
  name: "All Sizes (AI Assigned)",
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm" aiAssigned>
        Small AI
      </Tag>
      <Tag size="md" aiAssigned>
        Medium AI
      </Tag>
      <Tag size="lg" aiAssigned>
        Large AI
      </Tag>
    </div>
  ),
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">Default</p>
        <div className="flex items-center gap-2">
          {TAG_COLORS.map((color) => (
            <Tag key={color} size="lg" color={color}>
              {color}
            </Tag>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          Removable
        </p>
        <div className="flex items-center gap-2">
          {TAG_COLORS.map((color) => (
            <Tag key={color} size="lg" color={color} onRemove={() => {}}>
              {color}
            </Tag>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">Selected</p>
        <div className="flex items-center gap-2">
          {TAG_COLORS.map((color) => (
            <Tag key={color} size="lg" color={color} selected>
              {color}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const AllSizesAllStates: Story = {
  name: "Size × State Matrix",
  render: () => (
    <div className="flex flex-col gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size}>
          <p className="mb-2 text-sm font-medium text-gray-cool-500">
            Size: {size}
          </p>
          <div className="flex items-center gap-3">
            <Tag size={size} color="blue">
              Default
            </Tag>
            <Tag size={size} color="blue" aiAssigned>
              AI Tag
            </Tag>
            <Tag size={size} color="blue" onRemove={() => {}}>
              Removable
            </Tag>
            <Tag size={size} color="blue" selected>
              Selected
            </Tag>
            <Tag size={size} color="blue" selected aiAssigned>
              Selected AI
            </Tag>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const TagGroupStory: Story = {
  name: "Tag Group",
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          Large Group
        </p>
        <TagGroup>
          <Tag size="lg">Interested</Tag>
          <Tag size="lg" aiAssigned>
            Salesforce
          </Tag>
          <Tag size="lg">Campaigns</Tag>
          <Tag size="lg" aiAssigned>
            Campaigns
          </Tag>
          <Tag size="lg">French</Tag>
          <Tag size="lg" aiAssigned>
            Corporation
          </Tag>
          <Tag size="lg">Demo</Tag>
          <Tag size="lg">Positive</Tag>
          <Tag size="lg">Lead</Tag>
        </TagGroup>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          Medium Group
        </p>
        <TagGroup>
          <Tag>Interested</Tag>
          <Tag aiAssigned>Salesforce</Tag>
          <Tag>Campaigns</Tag>
          <Tag>French</Tag>
          <Tag>Demo</Tag>
        </TagGroup>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-cool-500">
          Small Group
        </p>
        <TagGroup>
          <Tag size="sm">Interested</Tag>
          <Tag size="sm" aiAssigned>
            Salesforce
          </Tag>
          <Tag size="sm">Campaigns</Tag>
          <Tag size="sm">French</Tag>
        </TagGroup>
      </div>
    </div>
  ),
};

export const MixedColorGroup: Story = {
  name: "Mixed Color Group",
  render: () => (
    <TagGroup>
      <Tag color="blue">Sales</Tag>
      <Tag color="green" aiAssigned>
        Qualified
      </Tag>
      <Tag color="pink">VIP</Tag>
      <Tag color="yellow">Pending</Tag>
      <Tag color="indigo">Enterprise</Tag>
      <Tag color="cyan">Support</Tag>
      <Tag color="brown">Escalated</Tag>
      <Tag color="grey">Other</Tag>
    </TagGroup>
  ),
};
