import type { Meta, StoryObj } from "@storybook/react";
import { ScoreBadge } from "../components/score-badge";

const meta = {
  title: "Components/ScoreBadge",
  component: ScoreBadge,
  tags: ["autodocs"],
  argTypes: {
    score: { control: { type: "range", min: 0, max: 100, step: 1 } },
    variant: {
      control: "select",
      options: ["badge", "text"],
    },
  },
} satisfies Meta<typeof ScoreBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HighScore: Story = {
  args: { score: 85, variant: "badge" },
};

export const MediumScore: Story = {
  args: { score: 60, variant: "badge" },
};

export const LowScore: Story = {
  args: { score: 30, variant: "badge" },
};

export const TextVariant: Story = {
  args: { score: 85, variant: "text" },
};

export const AllScores: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <ScoreBadge score={92} />
      <ScoreBadge score={65} />
      <ScoreBadge score={35} />
      <ScoreBadge score={92} variant="text" />
      <ScoreBadge score={65} variant="text" />
      <ScoreBadge score={35} variant="text" />
    </div>
  ),
};
