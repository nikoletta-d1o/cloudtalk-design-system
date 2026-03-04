import type { Meta, StoryObj } from "@storybook/react";
import { SentimentIcon } from "../components/sentiment-icon";

const meta = {
  title: "Components/SentimentIcon",
  component: SentimentIcon,
  tags: ["autodocs"],
  argTypes: {
    sentiment: {
      control: "select",
      options: ["positive", "negative", "mixed", "neutral"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof SentimentIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: { sentiment: "positive", size: "md" },
};

export const Negative: Story = {
  args: { sentiment: "negative", size: "md" },
};

export const Mixed: Story = {
  args: { sentiment: "mixed", size: "md" },
};

export const Neutral: Story = {
  args: { sentiment: "neutral", size: "md" },
};

export const AllSentiments: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(["positive", "negative", "mixed", "neutral"] as const).map((s) => (
        <div key={s} className="flex flex-col items-center gap-1">
          <SentimentIcon sentiment={s} size="md" />
          <span className="text-xs text-gray-cool-500">{s}</span>
        </div>
      ))}
    </div>
  ),
};
