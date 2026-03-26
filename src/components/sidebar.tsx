"use client";

import { useState, useMemo, useEffect, useRef, useCallback, type ComponentType } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from "lucide-react";
import { LinkExternalIcon } from "./sidebar-icons";
import { cn } from "../utils";

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface SidebarNavSubItem {
  label: string;
  href: string;
}

export interface SidebarPopoverItem {
  label: string;
  href: string;
  onClick?: () => void;
}

export interface SidebarNavItem {
  label: string;
  href: string;
  icon: LucideIcon | ComponentType<{ className?: string }>;
  external?: boolean;
  children?: SidebarNavSubItem[];
  /** For bottom items: show a popover instead of navigating. */
  popoverItems?: SidebarPopoverItem[];
}

export interface SidebarNavSection {
  label?: string;
  items: SidebarNavItem[];
}

export interface SidebarProps {
  /** Grouped navigation items. Each section can have an optional label. */
  sections: SidebarNavSection[];
  /** Items pinned at the bottom (e.g. Help). */
  bottomItems?: SidebarNavItem[];
  /** Currently active path. Used for highlighting + auto-expanding parents. */
  activePath: string;
  /** Whether the sidebar is collapsed to icon-only mode. */
  collapsed?: boolean;
  /** Called when the user toggles collapse/expand. */
  onCollapsedChange?: (collapsed: boolean) => void;
  /**
   * Render function for links. Allows consumers to use their router's Link
   * component (e.g. Next.js Link, React Router Link).
   * Receives href, children, className, title, and a ref callback.
   * Falls back to a plain `<a>` tag.
   */
  renderLink?: (props: {
    href: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
    ref?: React.Ref<HTMLAnchorElement>;
  }) => React.ReactNode;
  /** Optional extra className on the root <aside>. */
  className?: string;
  /** Show border on the right edge. Default true. */
  bordered?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Logo                                                               */
/* ------------------------------------------------------------------ */

const CloudTalkLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 168 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-label="CloudTalk"
  >
    <path
      d="M104.095 0H63.9046C28.6111 0 0 28.6111 0 63.9046V104.095C0 139.389 28.6111 168 63.9046 168H104.095C139.389 168 168 139.389 168 104.095V63.9046C168 28.6111 139.389 0 104.095 0Z"
      fill="#0527FF"
    />
    <path
      d="M77.7108 119.474C79.7138 119.474 80.1661 120.702 80.7907 122.554L83.72 131.794C84.0215 132.871 84.6461 133.323 85.5723 133.323H86.8C87.7261 133.323 88.3292 132.871 88.6523 131.794L91.5815 122.554C92.2061 120.702 92.3569 119.323 96.1908 119.323C104.806 119.323 112.969 118.095 119.108 112.086C122.037 109.157 125.569 108.08 128.951 110.385L131.88 112.388C136.037 115.166 137.265 120.378 133.883 123.932C125.268 132.698 113.12 137.932 99.2707 137.932H76.2031C48.8277 137.932 28.5169 117.622 28.5169 90.6984V77.4738C28.5169 50.5508 48.8277 30.24 76.2031 30.24H99.2707C113.12 30.24 125.268 35.4738 133.883 44.24C137.265 47.7723 136.037 53.0061 131.88 55.7846L128.951 57.7877C125.569 60.0923 122.037 59.0154 119.108 56.0861C112.948 50.0769 104.806 48.8492 96.1908 48.8492L77.7323 48.6985C58.6492 48.5477 48.5046 60.3938 48.5046 77.4738V90.6984C48.5046 107.778 58.6492 119.474 77.7323 119.474H77.7108Z"
      fill="white"
    />
  </svg>
);

const CloudTalkWordmark = () => (
  <svg
    width="102"
    height="12"
    viewBox="0 0 136 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g clipPath="url(#ct-sidebar-wordmark)">
      <path d="M7.19771 13.172C7.4899 13.172 7.55773 13.352 7.64773 13.622L8.07558 14.9721C8.11993 15.1299 8.20993 15.1964 8.34559 15.1964H8.5256C8.65995 15.1964 8.74996 15.1286 8.79561 14.9721L9.22346 13.622C9.31346 13.352 9.33564 13.1498 9.89783 13.1498C11.1579 13.1498 12.3488 12.9698 13.2489 12.0932C13.6767 11.6654 14.1932 11.5089 14.6889 11.8454L15.1168 12.1376C15.7246 12.542 15.9046 13.3077 15.409 13.8242C14.1489 15.1064 12.3723 15.8708 10.3479 15.8708H6.97466C2.96883 15.8708 0 12.902 0 8.96659V7.03215C0 3.09676 2.96883 0.12793 6.97205 0.12793H10.3452C12.3697 0.12793 14.1463 0.892312 15.4063 2.17454C15.9007 2.69239 15.7207 3.45677 15.1142 3.86114L14.6863 4.15333C14.1919 4.49117 13.6741 4.33334 13.2462 3.90549C12.3462 3.02893 11.154 2.84892 9.89523 2.82675L7.19641 2.82675C4.40759 2.80457 2.92317 4.53552 2.92317 7.03215V8.96659C2.92317 11.4632 4.40759 13.172 7.19641 13.172H7.19771Z" fill="#0f172a" />
      <path d="M19.7699 1.20651L19.7477 14.9041C19.7477 15.1063 19.8377 15.1963 20.0399 15.1963H20.2199C20.3777 15.1963 20.4678 15.1284 20.5121 14.9941L20.9399 13.644C21.03 13.374 21.03 13.1718 21.5922 13.1718H27.642C28.2264 13.1718 28.6542 13.5997 28.6542 14.1841V14.8584C28.6542 15.4428 28.2264 15.8706 27.642 15.8706H17.8355C17.2511 15.8706 16.8232 15.4428 16.8232 14.8584L16.8454 1.20651C16.8454 0.59866 17.3176 0.126465 17.9255 0.126465H18.6898C19.2977 0.126465 19.7699 0.59866 19.7699 1.20651Z" fill="#0f172a" />
      <path d="M45.1173 7.03215V8.96659C45.1173 12.902 42.1485 15.8708 38.1452 15.8708H35.4008C31.3975 15.8708 28.4287 12.902 28.4287 8.96659V7.03215C28.4287 3.09676 31.3975 0.12793 35.4008 0.12793H38.1452C42.1485 0.12793 45.1173 3.09676 45.1173 7.03215ZM35.4008 13.172H38.1452C40.7097 13.172 42.1941 11.5976 42.1941 8.96659V7.03215C42.1941 4.40116 40.7097 2.82675 38.1452 2.82675H35.4008C32.8363 2.82675 31.3519 4.40116 31.3519 7.03215V8.96659C31.3519 11.5976 32.8363 13.172 35.4008 13.172Z" fill="#0f172a" />
      <path d="M53.6631 13.1718H55.5076C58.072 13.1718 59.5564 11.5974 59.5564 8.96642V1.20651C59.5564 0.59866 60.0286 0.126465 60.6365 0.126465H61.4009C62.0087 0.126465 62.4809 0.59866 62.4809 1.20651V8.96642C62.4809 12.9018 59.5121 15.8706 55.5089 15.8706H53.6644C49.6612 15.8706 46.6924 12.9018 46.6924 8.96642V1.20651C46.6924 0.59866 47.1646 0.126465 47.7724 0.126465H48.5368C49.1447 0.126465 49.6169 0.59866 49.6169 1.20651V8.96642C49.6169 11.5974 51.1013 13.1718 53.6657 13.1718H53.6631Z" fill="#0f172a" />
      <path d="M65.4481 0.12793H72.4423C76.4012 0.12793 79.4601 3.09676 79.4601 6.80779V9.19225C79.4601 12.9033 76.4469 15.8721 72.4423 15.8721H65.4481C64.6837 15.8721 64.0537 15.2421 64.0537 14.4777V1.52234C64.0537 0.757958 64.6837 0.12793 65.4481 0.12793ZM67.2704 13.1733H72.4437C75.0081 13.1733 76.4925 11.5989 76.4925 9.19225V6.80779C76.4925 4.40116 75.0081 2.82675 72.4437 2.82675H67.2704C67.0682 2.82675 66.9782 2.91675 66.9782 3.11893V12.8798C66.9782 13.082 67.0682 13.172 67.2704 13.172V13.1733Z" fill="#0f172a" />
      <path d="M79.347 1.81453V1.14015C79.347 0.555775 79.7749 0.12793 80.3592 0.12793H92.5046C93.0889 0.12793 93.5168 0.555775 93.5168 1.14015V1.81453C93.5168 2.3989 93.0889 2.82675 92.5046 2.82675H87.8935L87.8713 14.7921C87.8713 15.3999 87.3991 15.8721 86.7913 15.8721H86.0269C85.419 15.8721 84.9468 15.3999 84.969 14.7921L84.969 2.82675H80.3579C79.7735 2.82675 79.3457 2.3989 79.3457 1.81453H79.347Z" fill="#0f172a" />
      <path d="M93.4033 11.9134V10.3168C93.4033 7.93235 95.1799 6.38141 97.6766 6.38141H104.356C104.559 6.38141 104.649 6.29141 104.649 6.08923V4.53698C104.649 3.30041 104.176 2.82821 102.94 2.82821H95.5856C95.0012 2.82821 94.5734 2.40037 94.5734 1.81599V1.14161C94.5734 0.55724 95.0012 0.129395 95.5856 0.129395H102.94C106.066 0.129395 107.573 1.68164 107.573 4.76265V14.4766C107.573 15.2409 106.943 15.871 106.179 15.871H97.6322C95.1812 15.871 93.4033 14.3187 93.4033 11.9121V11.9134ZM97.8566 13.1735H104.356C104.559 13.1735 104.649 13.0835 104.649 12.8813V7.34798C104.649 7.1458 104.559 7.05579 104.356 7.05579H104.176C104.019 7.05579 103.929 7.12362 103.884 7.25797L103.456 8.60804C103.366 8.87805 103.366 9.08023 102.804 9.08023H97.9009C96.8443 9.08023 96.3265 9.46242 96.3265 10.5425V11.689C96.3265 12.7913 96.8443 13.1735 97.8553 13.1735H97.8566Z" fill="#0f172a" />
      <path d="M112.094 1.20651L112.072 14.9041C112.072 15.1063 112.162 15.1963 112.364 15.1963H112.544C112.702 15.1963 112.792 15.1284 112.836 14.9941L113.264 13.644C113.354 13.374 113.354 13.1718 113.916 13.1718H119.966C120.551 13.1718 120.978 13.5997 120.978 14.1841V14.8584C120.978 15.4428 120.551 15.8706 119.966 15.8706H110.16C109.575 15.8706 109.147 15.4428 109.147 14.8584L109.17 1.20651C109.17 0.59866 109.642 0.126465 110.25 0.126465H111.014C111.622 0.126465 112.094 0.59866 112.094 1.20651Z" fill="#0f172a" />
      <path d="M123.182 0.128091H123.946C124.554 0.128091 125.026 0.600286 125.026 1.20814V6.53794C125.026 6.65012 125.116 6.74013 125.229 6.74013L126.825 6.7623C126.983 6.7623 127.14 6.69447 127.23 6.58229L132.695 0.398103C133.099 -0.0740916 133.775 -0.119746 134.269 0.308099L134.652 0.645941C135.124 1.07379 135.146 1.72599 134.719 2.19818L129.636 7.888L135.618 13.4878C136.09 13.9378 136.136 14.6344 135.686 15.1301L135.258 15.6023C134.808 16.0966 134.134 16.1201 133.639 15.6479L127.184 9.57591C127.094 9.4859 126.96 9.44155 126.824 9.44155H125.227C125.115 9.44155 125.025 9.53156 125.025 9.64373V14.7948C125.025 15.4027 124.553 15.8749 123.945 15.8749H123.181C122.573 15.8749 122.101 15.4027 122.101 14.7948V1.20684C122.101 0.598982 122.573 0.126787 123.181 0.126787L123.182 0.128091Z" fill="#0f172a" />
    </g>
    <defs>
      <clipPath id="ct-sidebar-wordmark">
        <rect width="136" height="15.9738" fill="white" transform="translate(0 0.0131836)" />
      </clipPath>
    </defs>
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function hasActiveChild(item: SidebarNavItem, activePath: string): boolean {
  if (!item.children) return false;
  return item.children.some((child) => activePath === child.href);
}

function getAutoExpandedItems(
  sections: SidebarNavSection[],
  activePath: string
): string[] {
  const expanded: string[] = [];
  for (const section of sections) {
    for (const item of section.items) {
      if (item.children && hasActiveChild(item, activePath)) {
        expanded.push(item.href);
      }
    }
  }
  return expanded;
}

/* ------------------------------------------------------------------ */
/*  Default link renderer (plain <a>)                                  */
/* ------------------------------------------------------------------ */

function DefaultLink({
  href,
  children,
  className,
  title,
  ref,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  ref?: React.Ref<HTMLAnchorElement>;
}) {
  return (
    <a href={href} className={className} title={title} ref={ref}>
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Sidebar({
  sections,
  bottomItems = [],
  activePath,
  collapsed = false,
  onCollapsedChange,
  renderLink,
  className,
  bordered = true,
}: SidebarProps) {
  const LinkComponent = renderLink ?? DefaultLink;

  const autoExpanded = useMemo(
    () => getAutoExpandedItems(sections, activePath),
    [sections, activePath]
  );
  const [manualExpanded, setManualExpanded] = useState<string[]>([]);
  const [manualCollapsed, setManualCollapsed] = useState<string[]>([]);

  const expandedItems = useMemo(() => {
    const set = new Set([...autoExpanded, ...manualExpanded]);
    for (const href of manualCollapsed) set.delete(href);
    return Array.from(set);
  }, [autoExpanded, manualExpanded, manualCollapsed]);

  const sidebarWidth = collapsed ? "w-[84px]" : "w-[244px]";

  const toggleExpand = (href: string) => {
    if (expandedItems.includes(href)) {
      // Collapse it
      setManualExpanded((prev) => prev.filter((h) => h !== href));
      setManualCollapsed((prev) =>
        prev.includes(href) ? prev : [...prev, href]
      );
    } else {
      // Expand it
      setManualCollapsed((prev) => prev.filter((h) => h !== href));
      setManualExpanded((prev) =>
        prev.includes(href) ? prev : [...prev, href]
      );
    }
  };

  const isItemActive = (href: string) =>
    activePath === href || activePath.startsWith(href + "/");

  // Popover / flyout state (shared for bottom items + collapsed nav flyouts)
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const sidebarRef = useRef<HTMLElement>(null);
  const [flyoutTop, setFlyoutTop] = useState<number>(0);

  const setTriggerRef = useCallback(
    (key: string) => (el: HTMLDivElement | null) => {
      triggerRefs.current[key] = el;
    },
    []
  );

  // Position the flyout relative to the sidebar when popover opens
  useEffect(() => {
    if (!openPopover || !collapsed) return;
    const trigger = triggerRefs.current[openPopover];
    const sidebar = sidebarRef.current;
    if (trigger && sidebar) {
      const triggerRect = trigger.getBoundingClientRect();
      const sidebarRect = sidebar.getBoundingClientRect();
      setFlyoutTop(triggerRect.top - sidebarRect.top);
    }
  }, [openPopover, collapsed]);

  // Close popover on outside click
  useEffect(() => {
    if (!openPopover) return;
    const handler = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        // Also check if click was on a trigger element
        const trigger = triggerRefs.current[openPopover];
        if (trigger && trigger.contains(e.target as Node)) return;
        setOpenPopover(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openPopover]);

  // Auto-scroll to active nav item on mount / path change
  const activeRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [activePath]);

  // Find the currently open flyout item (for collapsed nav flyouts)
  const openFlyoutItem = useMemo(() => {
    if (!collapsed || !openPopover) return null;
    for (const section of sections) {
      for (const item of section.items) {
        if (item.children && item.href === openPopover) return item;
      }
    }
    return null;
  }, [collapsed, openPopover, sections]);

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        "fixed left-0 top-0 z-30 flex h-screen flex-col justify-between bg-white py-2.5 px-4 transition-all duration-200",
        sidebarWidth,
        bordered && "border-r border-[#EFF1F5]",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top section */}
      <div className="flex flex-col gap-4 overflow-y-auto">
        {/* Logo + collapse toggle */}
        <div
          className={cn(
            "flex items-center py-2",
            collapsed ? "justify-center" : "justify-between"
          )}
        >
          {collapsed ? (
            <CloudTalkLogo />
          ) : (
            <div className="flex items-center gap-2.5">
              <CloudTalkLogo />
              <CloudTalkWordmark />
            </div>
          )}
          {!collapsed && onCollapsedChange && (
            <button
              onClick={() => onCollapsedChange(true)}
              className="rounded-md p-1 text-gray-cool-400 hover:bg-neutral-100 hover:text-neutral-600 transition-colors"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Expand toggle (collapsed state) */}
        {collapsed && onCollapsedChange && (
          <div className="flex justify-center">
            <button
              onClick={() => onCollapsedChange(false)}
              className="rounded-md p-1 text-gray-cool-400 hover:bg-neutral-100 hover:text-neutral-600 transition-colors"
              aria-label="Expand sidebar"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Navigation sections */}
        <nav className="flex flex-col gap-2">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="flex flex-col gap-1">
              {!collapsed && section.label && (
                <span className="font-sans text-[10px] font-semibold uppercase leading-5 tracking-[0.15px] text-gray-cool-400">
                  {section.label}
                </span>
              )}
              {section.items.map((item) => {
                const isActive = isItemActive(item.href);
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = expandedItems.includes(item.href);
                const isFlyoutOpen = collapsed && openPopover === item.href;
                const Icon = item.icon;

                return (
                  <div
                    key={item.href}
                    className="relative"
                    ref={hasChildren ? setTriggerRef(item.href) : undefined}
                  >
                    {/* Main nav item */}
                    <div
                      className={cn(
                        "flex h-[38px] items-center rounded-lg transition-all duration-150 cursor-pointer",
                        collapsed ? "justify-center px-0" : "gap-4 px-4",
                        isActive && !hasChildren
                          ? "bg-[#f1f3ff] border border-gray-cool-200 text-primary-600 font-semibold shadow-card"
                          : "text-gray-cool-800 hover:bg-neutral-50"
                      )}
                      onClick={() => {
                        if (hasChildren) {
                          if (collapsed) {
                            // Toggle flyout popover in collapsed mode
                            setOpenPopover(isFlyoutOpen ? null : item.href);
                          } else {
                            toggleExpand(item.href);
                          }
                        }
                      }}
                    >
                      {hasChildren ? (
                        <>
                          <Icon className="h-5 w-5 shrink-0" />
                          {!collapsed && (
                            <>
                              <span className="flex-1 text-sm font-medium">
                                {item.label}
                              </span>
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4 text-gray-cool-400" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-gray-cool-400" />
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        LinkComponent({
                          href: item.href,
                          ref: isActive ? activeRef : undefined,
                          title: collapsed ? item.label : undefined,
                          className: cn(
                            "flex h-full w-full items-center",
                            collapsed ? "justify-center" : "gap-4"
                          ),
                          children: (
                            <>
                              <Icon className="h-5 w-5 shrink-0" />
                              {!collapsed && (
                                <span className="flex-1 flex items-center justify-between text-sm font-medium">
                                  {item.label}
                                  {item.external && (
                                    <LinkExternalIcon className="h-3.5 w-3.5 text-gray-cool-400" />
                                  )}
                                </span>
                              )}
                            </>
                          ),
                        })
                      )}
                    </div>

                    {/* Sub-items: inline when expanded */}
                    {hasChildren && isExpanded && !collapsed && (
                      <div className="flex flex-col gap-0.5 mt-0.5">
                        {item.children!.map((child) => {
                          const isChildActive = activePath === child.href;
                          return (
                            <div key={child.href}>
                              {LinkComponent({
                                href: child.href,
                                ref: isChildActive ? activeRef : undefined,
                                className: cn(
                                  "flex h-[28px] items-center rounded-lg pl-[52px] pr-4 text-xs font-medium transition-all duration-150",
                                  isChildActive
                                    ? "bg-[#f1f3ff] text-gray-cool-800"
                                    : "text-gray-cool-800 hover:bg-neutral-50"
                                ),
                                children: child.label,
                              })}
                            </div>
                          );
                        })}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      {bottomItems.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="h-px bg-neutral-200" />
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const hasPopover = item.popoverItems && item.popoverItems.length > 0;
            const isPopoverOpen = openPopover === item.label;

            return (
              <div key={item.label} className="relative" ref={isPopoverOpen ? popoverRef : undefined}>
                {hasPopover ? (
                  <button
                    onClick={() => setOpenPopover(isPopoverOpen ? null : item.label)}
                    className={cn(
                      "flex h-[38px] w-full items-center rounded-lg text-gray-cool-800 hover:bg-neutral-50 transition-all duration-150",
                      collapsed ? "justify-center px-0" : "gap-4 px-4"
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    {!collapsed && (
                      <span className="flex-1 flex items-center justify-between text-sm font-medium">
                        {item.label}
                        <ChevronRight className="h-4 w-4 text-gray-cool-400" />
                      </span>
                    )}
                  </button>
                ) : (
                  LinkComponent({
                    href: item.href,
                    className: cn(
                      "flex h-[38px] items-center rounded-lg text-gray-cool-800 hover:bg-neutral-50 transition-all duration-150",
                      collapsed ? "justify-center px-0" : "gap-4 px-4"
                    ),
                    children: (
                      <>
                        <Icon className="h-5 w-5 shrink-0" />
                        {!collapsed && (
                          <span className="flex-1 flex items-center justify-between text-sm font-medium">
                            {item.label}
                            <ChevronRight className="h-4 w-4 text-gray-cool-400" />
                          </span>
                        )}
                      </>
                    ),
                  })
                )}

                {/* Popover */}
                {hasPopover && isPopoverOpen && (
                  <div
                    className="absolute left-full bottom-full mb-2 w-[212px] rounded-lg border border-gray-cool-200 bg-white p-2.5 shadow-[0px_13px_37px_0px_rgba(0,0,0,0.21)] z-50"
                  >
                    <div className="flex flex-col gap-1">
                      {item.popoverItems!.map((popItem) => (
                        <div key={popItem.label}>
                          {popItem.onClick ? (
                            <button
                              onClick={() => {
                                popItem.onClick?.();
                                setOpenPopover(null);
                              }}
                              className="flex h-[38px] w-full items-center rounded-lg px-4 text-sm font-medium text-gray-cool-800 hover:bg-[#dde2ff] transition-colors"
                            >
                              {popItem.label}
                            </button>
                          ) : (
                            LinkComponent({
                              href: popItem.href,
                              className:
                                "flex h-[38px] items-center rounded-lg px-4 text-sm font-medium text-gray-cool-800 hover:bg-[#dde2ff] transition-colors",
                              children: popItem.label,
                            })
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {/* Collapsed nav flyout — rendered outside scrollable area */}
      {openFlyoutItem && collapsed && (
        <div
          ref={popoverRef}
          className="absolute ml-2 w-[212px] rounded-lg border border-gray-cool-200 bg-white p-2.5 shadow-[0px_13px_37px_0px_rgba(0,0,0,0.21)] z-50"
          style={{ top: flyoutTop, left: "100%" }}
        >
          <p className="px-4 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.15px] text-gray-cool-400">
            {openFlyoutItem.label}
          </p>
          <div className="flex flex-col gap-0.5">
            {openFlyoutItem.children!.map((child) => {
              const isChildActive = activePath === child.href;
              return (
                <div key={child.href}>
                  {LinkComponent({
                    href: child.href,
                    className: cn(
                      "flex h-[38px] items-center rounded-lg px-4 text-sm font-medium transition-colors",
                      isChildActive
                        ? "bg-[#f1f3ff] text-gray-cool-800"
                        : "text-gray-cool-800 hover:bg-[#dde2ff]"
                    ),
                    children: child.label,
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
}
