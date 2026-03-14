import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../components/toast";

const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-cool-50 rounded-lg">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "info",
    title: "Info",
    message: "toast notification",
    actionLabel: "Action",
    onAction: () => alert("Action clicked"),
    onClose: () => alert("Close clicked"),
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    message: "toast notification",
    actionLabel: "Action",
    onAction: () => {},
    onClose: () => {},
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    message: "toast notification",
    actionLabel: "Action",
    onAction: () => {},
    onClose: () => {},
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    message: "toast notification",
    actionLabel: "Action",
    onAction: () => {},
    onClose: () => {},
  },
};

export const AllHorizontalVariants: Story = {
  name: "All Horizontal Variants",
  render: () => (
    <div className="flex flex-col gap-4">
      <Toast
        variant="info"
        title="Info"
        message="toast notification"
        actionLabel="Action"
        onAction={() => {}}
        onClose={() => {}}
      />
      <Toast
        variant="success"
        title="Success"
        message="toast notification"
        actionLabel="Action"
        onAction={() => {}}
        onClose={() => {}}
      />
      <Toast
        variant="warning"
        title="Warning"
        message="toast notification"
        actionLabel="Action"
        onAction={() => {}}
        onClose={() => {}}
      />
      <Toast
        variant="error"
        title="Error"
        message="toast notification"
        actionLabel="Action"
        onAction={() => {}}
        onClose={() => {}}
      />
    </div>
  ),
};

export const VerticalInfo: Story = {
  name: "Vertical / Info",
  args: {
    variant: "info",
    layout: "vertical",
    title: "Info",
    message:
      "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onCancel: () => {},
    onConfirm: () => {},
  },
};

export const VerticalSuccess: Story = {
  name: "Vertical / Success",
  args: {
    variant: "success",
    layout: "vertical",
    title: "Success",
    message:
      "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onCancel: () => {},
    onConfirm: () => {},
  },
};

export const VerticalWarning: Story = {
  name: "Vertical / Warning",
  args: {
    variant: "warning",
    layout: "vertical",
    title: "Warning",
    message:
      "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onCancel: () => {},
    onConfirm: () => {},
  },
};

export const VerticalError: Story = {
  name: "Vertical / Error",
  args: {
    variant: "error",
    layout: "vertical",
    title: "Error",
    message:
      "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onCancel: () => {},
    onConfirm: () => {},
  },
};

export const AllVerticalVariants: Story = {
  name: "All Vertical Variants",
  render: () => (
    <div className="flex flex-col gap-4">
      <Toast
        variant="info"
        layout="vertical"
        title="Info"
        message="Dui enim ut tellus nisi eu in. Sed at semper tristique tristique."
        onCancel={() => {}}
        onConfirm={() => {}}
      />
      <Toast
        variant="success"
        layout="vertical"
        title="Success"
        message="Dui enim ut tellus nisi eu in. Sed at semper tristique tristique."
        onCancel={() => {}}
        onConfirm={() => {}}
      />
      <Toast
        variant="warning"
        layout="vertical"
        title="Warning"
        message="Dui enim ut tellus nisi eu in. Sed at semper tristique tristique."
        onCancel={() => {}}
        onConfirm={() => {}}
      />
      <Toast
        variant="error"
        layout="vertical"
        title="Error"
        message="Dui enim ut tellus nisi eu in. Sed at semper tristique tristique."
        onCancel={() => {}}
        onConfirm={() => {}}
      />
    </div>
  ),
};

export const WithCloseButton: Story = {
  name: "Vertical with Close Button",
  args: {
    variant: "info",
    layout: "vertical",
    title: "Info",
    message:
      "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onClose: () => {},
    onCancel: () => {},
    onConfirm: () => {},
  },
};

export const HorizontalNoAction: Story = {
  name: "Horizontal (no action)",
  args: {
    variant: "info",
    title: "Info",
    message: "toast notification",
    onClose: () => {},
  },
};

export const VerticalNoFooter: Story = {
  name: "Vertical (no footer)",
  args: {
    variant: "success",
    layout: "vertical",
    title: "Success",
    message:
      "Dui enim ut tellus nisi eu in. Sed at semper tristique tristique.",
    onClose: () => {},
  },
};
