import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TabBar } from "../components/tab-bar";

const meta = {
  title: "Components/TabBar",
  component: TabBar,
  tags: ["autodocs"],
  argTypes: {
    accentColor: {
      control: "select",
      options: ["primary", "brand"],
    },
  },
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabs = ["Overview", "Analytics", "Settings"] as const;

export const Primary: Story = {
  args: {
    tabs,
    activeTab: "Overview",
    onTabChange: () => {},
    accentColor: "primary",
  },
};

export const BrandAccent: Story = {
  args: {
    tabs,
    activeTab: "Analytics",
    onTabChange: () => {},
    accentColor: "brand",
  },
};

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = useState<(typeof tabs)[number]>("Overview");
    return (
      <div>
        <TabBar tabs={tabs} activeTab={active} onTabChange={setActive} />
        <p className="mt-4 text-sm text-gray-cool-600">Active: {active}</p>
      </div>
    );
  },
};
