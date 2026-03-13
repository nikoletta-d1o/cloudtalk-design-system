import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../components/tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    aiAssigned: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Tag", size: "md" },
};

export const AiAssigned: Story = {
  args: { children: "Salesforce", size: "md", aiAssigned: true },
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
      <Tag size="sm" aiAssigned>Small AI</Tag>
      <Tag size="md" aiAssigned>Medium AI</Tag>
      <Tag size="lg" aiAssigned>Large AI</Tag>
    </div>
  ),
};

export const TagGroup: Story = {
  name: "Tag Group (Mixed)",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Interested</Tag>
      <Tag aiAssigned>Salesforce</Tag>
      <Tag>Campaigns</Tag>
      <Tag aiAssigned>Campaigns</Tag>
      <Tag>French</Tag>
      <Tag aiAssigned>Corporation</Tag>
      <Tag>Demo</Tag>
      <Tag>Positive</Tag>
      <Tag>Lead</Tag>
    </div>
  ),
};
