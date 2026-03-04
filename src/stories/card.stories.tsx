import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: "select",
      options: ["default", "flush"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    padding: "default",
    children: (
      <div>
        <h3 className="text-sm font-medium text-gray-cool-900">Card Title</h3>
        <p className="mt-1 text-sm text-gray-cool-500">
          This is a default card with padding.
        </p>
      </div>
    ),
  },
};

export const Flush: Story = {
  args: {
    padding: "flush",
    children: (
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-cool-200 bg-gray-cool-50">
            <th className="px-4 py-2 text-left font-medium text-gray-cool-600">Name</th>
            <th className="px-4 py-2 text-left font-medium text-gray-cool-600">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-cool-100">
            <td className="px-4 py-2 text-gray-cool-800">Item 1</td>
            <td className="px-4 py-2 text-gray-cool-500">Active</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-cool-800">Item 2</td>
            <td className="px-4 py-2 text-gray-cool-500">Inactive</td>
          </tr>
        </tbody>
      </table>
    ),
  },
};
