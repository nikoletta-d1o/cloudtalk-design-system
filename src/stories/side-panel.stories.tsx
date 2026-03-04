import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SidePanel } from "../components/side-panel";
import { Button } from "../components/button";

const meta = {
  title: "Components/SidePanel",
  component: SidePanel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SidePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-6">
        <Button onClick={() => setOpen(true)}>Open Panel</Button>
        <SidePanel
          open={open}
          onClose={() => setOpen(false)}
          header={<h2 className="text-lg font-semibold text-gray-cool-900">Panel Title</h2>}
        >
          <div className="p-6">
            <p className="text-sm text-gray-cool-600">Panel content goes here.</p>
          </div>
        </SidePanel>
      </div>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-6">
        <Button onClick={() => setOpen(true)}>Open Panel with Footer</Button>
        <SidePanel
          open={open}
          onClose={() => setOpen(false)}
          header={<h2 className="text-lg font-semibold text-gray-cool-900">Details</h2>}
          footer={
            <div className="flex justify-end gap-2 p-4">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button>Save</Button>
            </div>
          }
        >
          <div className="p-6">
            <p className="text-sm text-gray-cool-600">
              This panel has a sticky footer with action buttons.
            </p>
          </div>
        </SidePanel>
      </div>
    );
  },
};
