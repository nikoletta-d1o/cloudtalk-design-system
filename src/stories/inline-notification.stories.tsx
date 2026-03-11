import type { Meta, StoryObj } from "@storybook/react";
import { InlineNotification } from "../components/inline-notification";

const meta = {
  title: "Components/InlineNotification",
  component: InlineNotification,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["warning", "info", "success", "error"],
    },
  },
} satisfies Meta<typeof InlineNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    variant: "warning",
    children:
      "High RTT detected (214 ms). This is commonly linked to geographic distance, VPN overhead, or ISP-level issues.",
    link: { label: "Troubleshoot", href: "#" },
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children:
      "A new version of the call quality engine is available. Review the changelog for details.",
    link: { label: "Learn more", href: "#" },
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children:
      "All quality metrics are within healthy thresholds. No action needed.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children:
      "Critical packet loss detected on carrier Deutsche Telekom. Calls may be dropping.",
    link: { label: "View details", href: "#" },
  },
};

export const WithoutLink: Story = {
  args: {
    variant: "warning",
    children: "This is a notification without an action link.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <InlineNotification
        variant="warning"
        link={{ label: "Troubleshoot", href: "#" }}
      >
        Warning: High RTT detected (214 ms).
      </InlineNotification>
      <InlineNotification
        variant="info"
        link={{ label: "Learn more", href: "#" }}
      >
        Info: A new version is available.
      </InlineNotification>
      <InlineNotification variant="success">
        Success: All metrics are healthy.
      </InlineNotification>
      <InlineNotification
        variant="error"
        link={{ label: "View details", href: "#" }}
      >
        Error: Critical packet loss detected.
      </InlineNotification>
    </div>
  ),
};
