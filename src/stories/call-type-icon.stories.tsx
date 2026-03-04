import type { Meta, StoryObj } from "@storybook/react";
import { CallTypeIcon } from "../components/call-type-icon";
import type { CallDirection, CallOutcome } from "../types";

const meta = {
  title: "Components/CallTypeIcon",
  component: CallTypeIcon,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["inbound", "outbound", "internal"],
    },
    outcome: {
      control: "select",
      options: ["answered", "missed", "voicemail"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof CallTypeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InboundAnswered: Story = {
  args: { direction: "inbound", outcome: "answered", size: "md" },
};

export const OutboundAnswered: Story = {
  args: { direction: "outbound", outcome: "answered", size: "md" },
};

export const InboundMissed: Story = {
  args: { direction: "inbound", outcome: "missed", size: "md" },
};

export const Voicemail: Story = {
  args: { direction: "inbound", outcome: "voicemail", size: "md" },
};

export const InternalAnswered: Story = {
  args: { direction: "internal", outcome: "answered", size: "md" },
};

const directions: CallDirection[] = ["inbound", "outbound", "internal"];
const outcomes: CallOutcome[] = ["answered", "missed", "voicemail"];

export const AllCombinations: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {directions.map((dir) =>
        outcomes.map((out) => (
          <div key={`${dir}-${out}`} className="flex items-center gap-2">
            <CallTypeIcon direction={dir} outcome={out} size="md" />
            <span className="text-xs text-gray-cool-600">
              {dir} / {out}
            </span>
          </div>
        ))
      )}
    </div>
  ),
};
