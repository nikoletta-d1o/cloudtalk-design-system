import type { Meta, StoryObj } from "@storybook/react";
import { Button, SplitButton } from "../components/button";
import { Plus } from "lucide-react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    shape: {
      control: "select",
      options: ["square", "circle"],
    },
    size: {
      control: "select",
      options: ["md", "icon", "number"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Interactive playground ── */

export const Playground: Story = {
  args: {
    children: "Button",
    variant: "primary",
    shape: "square",
    size: "md",
  },
};

/* ── Primary ── */

export const Primary: Story = {
  name: "Primary / Label",
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold text-gray-cool-900">
        Primary — Label button
      </h3>
      <div className="flex items-center gap-4">
        <Button variant="primary">Default</Button>
        <Button variant="primary" className="bg-brand-blue-600">
          Hover
        </Button>
        <Button variant="primary" className="bg-brand-blue-800">
          Active
        </Button>
        <Button variant="primary" loading>
          Loading
        </Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
};

export const PrimaryIcon: Story = {
  name: "Primary / Icon",
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold text-gray-cool-900">
        Primary — Icon button (square & circle)
      </h3>
      <div className="flex items-center gap-4">
        <Button variant="primary" size="icon" shape="square" aria-label="Add">
          <Plus className="size-4" />
        </Button>
        <Button variant="primary" size="icon" shape="circle" aria-label="Add">
          <Plus className="size-4" />
        </Button>
        <Button
          variant="primary"
          size="icon"
          shape="square"
          disabled
          aria-label="Add"
        >
          <Plus className="size-4" />
        </Button>
        <Button
          variant="primary"
          size="icon"
          shape="circle"
          disabled
          aria-label="Add"
        >
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  ),
};

export const PrimaryNumber: Story = {
  name: "Primary / Number",
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold text-gray-cool-900">
        Primary — Number button (square & circle)
      </h3>
      <div className="flex items-center gap-4">
        <Button variant="primary" size="number" shape="square">
          1
        </Button>
        <Button variant="primary" size="number" shape="circle">
          1
        </Button>
        <Button variant="primary" size="number" shape="square" disabled>
          1
        </Button>
        <Button variant="primary" size="number" shape="circle" disabled>
          1
        </Button>
      </div>
    </div>
  ),
};

/* ── Secondary ── */

export const Secondary: Story = {
  name: "Secondary / Label",
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold text-gray-cool-900">
        Secondary — Label button
      </h3>
      <div className="flex items-center gap-4">
        <Button variant="secondary">Default</Button>
        <Button variant="secondary" className="bg-gray-cool-300">
          Hover
        </Button>
        <Button variant="secondary" className="bg-gray-cool-400">
          Active
        </Button>
        <Button variant="secondary" loading>
          Loading
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
};

export const SecondaryIcon: Story = {
  name: "Secondary / Icon",
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold text-gray-cool-900">
        Secondary — Icon button (square & circle)
      </h3>
      <div className="flex items-center gap-4">
        <Button
          variant="secondary"
          size="icon"
          shape="square"
          aria-label="Add"
        >
          <Plus className="size-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          shape="circle"
          aria-label="Add"
        >
          <Plus className="size-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          shape="square"
          disabled
          aria-label="Add"
        >
          <Plus className="size-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          shape="circle"
          disabled
          aria-label="Add"
        >
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  ),
};

/* ── Tertiary ── */

export const Tertiary: Story = {
  name: "Tertiary / Label",
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold text-gray-cool-900">
        Tertiary — Label button
      </h3>
      <div className="flex items-center gap-4">
        <Button variant="tertiary">Default</Button>
        <Button variant="tertiary" className="bg-gray-cool-100">
          Hover
        </Button>
        <Button variant="tertiary" className="bg-gray-cool-300">
          Active
        </Button>
        <Button variant="tertiary" loading>
          Loading
        </Button>
        <Button variant="tertiary" disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
};

export const TertiaryIcon: Story = {
  name: "Tertiary / Icon",
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold text-gray-cool-900">
        Tertiary — Icon button (square & circle)
      </h3>
      <div className="flex items-center gap-4">
        <Button
          variant="tertiary"
          size="icon"
          shape="square"
          aria-label="Add"
        >
          <Plus className="size-4" />
        </Button>
        <Button
          variant="tertiary"
          size="icon"
          shape="circle"
          aria-label="Add"
        >
          <Plus className="size-4" />
        </Button>
        <Button
          variant="tertiary"
          size="icon"
          shape="square"
          disabled
          aria-label="Add"
        >
          <Plus className="size-4" />
        </Button>
        <Button
          variant="tertiary"
          size="icon"
          shape="circle"
          disabled
          aria-label="Add"
        >
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  ),
};

/* ── With icons ── */

export const WithLeadingIcon: Story = {
  name: "With leading icon",
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" leadingIcon={<Plus className="size-4" />}>
        Add item
      </Button>
      <Button variant="secondary" leadingIcon={<Plus className="size-4" />}>
        Add item
      </Button>
      <Button variant="tertiary" leadingIcon={<Plus className="size-4" />}>
        Add item
      </Button>
    </div>
  ),
};

/* ── Split / Combo button ── */

export const SplitButtons: Story = {
  name: "Split / Combo button",
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold text-gray-cool-900">
        Split button (Label + Dropdown chevron)
      </h3>
      <div className="flex items-center gap-4">
        <SplitButton
          variant="primary"
          leadingIcon={<Plus className="size-4" />}
          onClick={() => alert("Main click")}
          onDropdownClick={() => alert("Dropdown")}
        >
          Button
        </SplitButton>
        <SplitButton
          variant="secondary"
          leadingIcon={<Plus className="size-4" />}
        >
          Button
        </SplitButton>
        <SplitButton
          variant="tertiary"
          leadingIcon={<Plus className="size-4" />}
        >
          Button
        </SplitButton>
      </div>
      <div className="flex items-center gap-4">
        <SplitButton variant="primary" disabled>
          Disabled
        </SplitButton>
      </div>
    </div>
  ),
};

/* ── Full spec overview ── */

export const AllVariants: Story = {
  name: "Full Spec Overview",
  render: () => (
    <div className="flex flex-col gap-10">
      {/* Primary row */}
      <div>
        <h3 className="text-base font-semibold text-gray-cool-900 mb-4">
          Primary
        </h3>
        <div className="flex items-center gap-4">
          <Button variant="primary">Button</Button>
          <Button
            variant="primary"
            size="icon"
            shape="square"
            aria-label="Add"
          >
            <Plus className="size-4" />
          </Button>
          <Button
            variant="primary"
            size="icon"
            shape="circle"
            aria-label="Add"
          >
            <Plus className="size-4" />
          </Button>
          <Button variant="primary" size="number" shape="square">
            1
          </Button>
          <Button variant="primary" size="number" shape="circle">
            1
          </Button>
          <SplitButton
            variant="primary"
            leadingIcon={<Plus className="size-4" />}
          >
            Button
          </SplitButton>
        </div>
      </div>

      {/* Secondary row */}
      <div>
        <h3 className="text-base font-semibold text-gray-cool-900 mb-4">
          Secondary
        </h3>
        <div className="flex items-center gap-4">
          <Button variant="secondary">Button</Button>
          <Button
            variant="secondary"
            size="icon"
            shape="square"
            aria-label="Add"
          >
            <Plus className="size-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            shape="circle"
            aria-label="Add"
          >
            <Plus className="size-4" />
          </Button>
          <Button variant="secondary" size="number" shape="square">
            1
          </Button>
          <Button variant="secondary" size="number" shape="circle">
            1
          </Button>
        </div>
      </div>

      {/* Tertiary row */}
      <div>
        <h3 className="text-base font-semibold text-gray-cool-900 mb-4">
          Tertiary
        </h3>
        <div className="flex items-center gap-4">
          <Button variant="tertiary">Button</Button>
          <Button
            variant="tertiary"
            size="icon"
            shape="square"
            aria-label="Add"
          >
            <Plus className="size-4" />
          </Button>
          <Button
            variant="tertiary"
            size="icon"
            shape="circle"
            aria-label="Add"
          >
            <Plus className="size-4" />
          </Button>
          <Button variant="tertiary" size="number" shape="square">
            1
          </Button>
          <Button variant="tertiary" size="number" shape="circle">
            1
          </Button>
        </div>
      </div>

      {/* Loading states */}
      <div>
        <h3 className="text-base font-semibold text-gray-cool-900 mb-4">
          Loading
        </h3>
        <div className="flex items-center gap-4">
          <Button variant="primary" loading>
            Button
          </Button>
          <Button variant="secondary" loading>
            Button
          </Button>
          <Button variant="tertiary" loading>
            Button
          </Button>
        </div>
      </div>

      {/* Disabled states */}
      <div>
        <h3 className="text-base font-semibold text-gray-cool-900 mb-4">
          Disabled
        </h3>
        <div className="flex items-center gap-4">
          <Button variant="primary" disabled>
            Button
          </Button>
          <Button variant="secondary" disabled>
            Button
          </Button>
          <Button variant="tertiary" disabled>
            Button
          </Button>
        </div>
      </div>
    </div>
  ),
};
