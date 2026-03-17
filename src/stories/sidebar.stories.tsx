import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "../components/sidebar";
import type {
  SidebarNavSection,
  SidebarNavItem,
} from "../components/sidebar";
import {
  HomeSmileIcon,
  PhoneCallIcon,
  BarChartSquareIcon,
  UserIcon,
  UsersIcon,
  UserSquareIcon,
  NumbersListIcon,
  VoiceAgentIcon,
  SpeedometerIcon,
  SettingsIcon,
  MessageQuestionIcon,
} from "../components/sidebar-icons";

/* ------------------------------------------------------------------ */
/*  Sample data matching Figma designs                                 */
/* ------------------------------------------------------------------ */

const FULL_SECTIONS: SidebarNavSection[] = [
  {
    items: [
      { label: "Dashboard", href: "/dashboard", icon: HomeSmileIcon },
      { label: "Call Monitor", href: "/call-monitor", icon: PhoneCallIcon },
      { label: "Analytics", href: "/analytics", icon: BarChartSquareIcon, external: true },
    ],
  },
  {
    label: "COMPANY",
    items: [
      { label: "Users", href: "/users", icon: UserIcon },
      { label: "Groups", href: "/groups", icon: UsersIcon },
      { label: "Contacts", href: "/contacts", icon: UserSquareIcon },
      { label: "Numbers", href: "/numbers", icon: NumbersListIcon },
    ],
  },
  {
    label: "OPERATIONS",
    items: [
      {
        label: "VoiceAgents",
        href: "/voice-agents",
        icon: VoiceAgentIcon,
        children: [
          { label: "Agents", href: "/voice-agents/agents" },
          { label: "Knowledge Base", href: "/voice-agents/knowledge-base" },
          { label: "Tool Management", href: "/voice-agents/tool-management" },
        ],
      },
      {
        label: "Dialer",
        href: "/dialer",
        icon: SpeedometerIcon,
        children: [
          { label: "Campaigns", href: "/dialer/campaigns" },
          { label: "Call Scripts", href: "/dialer/call-scripts" },
          { label: "Surveys", href: "/dialer/surveys" },
        ],
      },
    ],
  },
  {
    label: "SETTINGS",
    items: [
      {
        label: "Account",
        href: "/account",
        icon: SettingsIcon,
        children: [
          { label: "Settings", href: "/account/settings" },
          { label: "Integrations", href: "/account/integrations" },
          { label: "Workflow Automation", href: "/account/workflow-automation" },
          { label: "Billing", href: "/billing" },
        ],
      },
    ],
  },
];

/** Agent / Supervisor / Analyst role — no Operations or Settings sections. */
const AGENT_SECTIONS: SidebarNavSection[] = [
  {
    items: [
      { label: "Dashboard", href: "/dashboard", icon: HomeSmileIcon },
      { label: "Call Monitor", href: "/call-monitor", icon: PhoneCallIcon },
      { label: "Analytics", href: "/analytics", icon: BarChartSquareIcon, external: true },
    ],
  },
  {
    label: "COMPANY",
    items: [
      { label: "Users", href: "/users", icon: UserIcon },
      { label: "Groups", href: "/groups", icon: UsersIcon },
      { label: "Contacts", href: "/contacts", icon: UserSquareIcon },
    ],
  },
];

const BOTTOM_ITEMS: SidebarNavItem[] = [
  {
    label: "Help",
    href: "#",
    icon: MessageQuestionIcon,
    popoverItems: [
      { label: "Chat with us", href: "#chat" },
      { label: "Help guides", href: "#guides" },
      { label: "Onboarding portal", href: "#onboarding" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Wrapper: positions the story inside a mock app layout              */
/* ------------------------------------------------------------------ */

function StoryWrapper({
  children,
  collapsed,
}: {
  children: React.ReactNode;
  collapsed?: boolean;
}) {
  return (
    <div className="relative" style={{ height: 700, background: "#EFF1F5" }}>
      {children}
      <div
        className="p-6 transition-all duration-200"
        style={{ marginLeft: collapsed ? 84 : 244 }}
      >
        <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
          <h1 className="text-lg font-semibold text-neutral-900">
            Page content
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            This area represents the main content of the application.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Interactive wrapper with collapse state                            */
/* ------------------------------------------------------------------ */

function InteractiveSidebar({
  sections,
  bottomItems,
  activePath,
  startCollapsed = false,
}: {
  sections: SidebarNavSection[];
  bottomItems?: SidebarNavItem[];
  activePath: string;
  startCollapsed?: boolean;
}) {
  const [collapsed, setCollapsed] = useState(startCollapsed);
  return (
    <StoryWrapper collapsed={collapsed}>
      <Sidebar
        sections={sections}
        bottomItems={bottomItems}
        activePath={activePath}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
      />
    </StoryWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  Meta                                                               */
/* ------------------------------------------------------------------ */

const meta = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    collapsed: { control: "boolean" },
    bordered: { control: "boolean" },
    activePath: { control: "text" },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Stories                                                            */
/* ------------------------------------------------------------------ */

/** Full CloudTalk sidebar with all sections — Admin role. Dashboard is active. */
export const Admin: Story = {
  name: "Admin",
  render: () => (
    <InteractiveSidebar
      sections={FULL_SECTIONS}
      bottomItems={BOTTOM_ITEMS}
      activePath="/dashboard"
    />
  ),
};

/** Agent / Supervisor / Analyst role — simplified sidebar without Operations or Settings. */
export const AgentSupervisor: Story = {
  name: "Agent / Supervisor",
  render: () => (
    <InteractiveSidebar
      sections={AGENT_SECTIONS}
      bottomItems={BOTTOM_ITEMS}
      activePath="/dashboard"
    />
  ),
};

/** Collapsed to icon-only mode. Click the expand chevron to open. */
export const Collapsed: Story = {
  render: () => (
    <InteractiveSidebar
      sections={FULL_SECTIONS}
      bottomItems={BOTTOM_ITEMS}
      activePath="/dashboard"
      startCollapsed
    />
  ),
};

/** Dialer section expanded with sub-items: Campaigns (active), Call Scripts, Surveys. */
export const DialerOpen: Story = {
  name: "Dialer expanded",
  render: () => (
    <InteractiveSidebar
      sections={FULL_SECTIONS}
      bottomItems={BOTTOM_ITEMS}
      activePath="/dialer/campaigns"
    />
  ),
};

/** VoiceAgents section expanded with sub-items: Agents (active), Knowledge Base, Tool Management. */
export const VoiceAgentsOpen: Story = {
  name: "VoiceAgents expanded",
  render: () => (
    <InteractiveSidebar
      sections={FULL_SECTIONS}
      bottomItems={BOTTOM_ITEMS}
      activePath="/voice-agents/agents"
    />
  ),
};

/** A child sub-item is active under Account — its parent auto-expands. */
export const ActiveSubItem: Story = {
  name: "Account expanded",
  render: () => (
    <InteractiveSidebar
      sections={FULL_SECTIONS}
      bottomItems={BOTTOM_ITEMS}
      activePath="/billing"
    />
  ),
};

/** All states overview — expanded and collapsed side by side. */
export const AllStates: Story = {
  name: "All States Overview",
  render: () => (
    <div className="flex gap-6" style={{ height: 700, background: "#EFF1F5", padding: 24 }}>
      {/* Expanded */}
      <div className="relative" style={{ width: 244 }}>
        <p className="mb-2 text-xs font-medium text-gray-cool-500">Expanded</p>
        <div className="relative overflow-hidden rounded-lg border border-neutral-200" style={{ height: 640 }}>
          <Sidebar
            sections={FULL_SECTIONS}
            bottomItems={BOTTOM_ITEMS}
            activePath="/billing"
            collapsed={false}
            className="!fixed !relative"
          />
        </div>
      </div>

      {/* Collapsed */}
      <div className="relative" style={{ width: 84 }}>
        <p className="mb-2 text-xs font-medium text-gray-cool-500">Collapsed</p>
        <div className="relative overflow-hidden rounded-lg border border-neutral-200" style={{ height: 640 }}>
          <Sidebar
            sections={FULL_SECTIONS}
            bottomItems={BOTTOM_ITEMS}
            activePath="/billing"
            collapsed
            className="!fixed !relative"
          />
        </div>
      </div>
    </div>
  ),
};
