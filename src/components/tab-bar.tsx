import { cn } from "../utils";

export interface TabBarProps<T extends string> {
  tabs: readonly T[];
  activeTab: T;
  onTabChange: (tab: T) => void;
  /** Accent color for the active underline */
  accentColor?: "primary" | "brand";
  className?: string;
}

const accentClasses = {
  primary: "bg-primary-600",
  brand: "bg-brand-blue",
} as const;

export function TabBar<T extends string>({
  tabs,
  activeTab,
  onTabChange,
  accentColor = "primary",
  className,
}: TabBarProps<T>) {
  return (
    <div className={cn("flex border-b border-gray-cool-200", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onTabChange(tab)}
          className={cn(
            "relative px-4 py-2.5 text-sm font-medium tracking-[0.05px] transition-colors whitespace-nowrap",
            activeTab === tab
              ? "text-gray-cool-900"
              : "text-gray-cool-500 hover:text-gray-cool-700"
          )}
        >
          {tab}
          {activeTab === tab && (
            <span
              className={cn(
                "absolute bottom-0 left-3 right-3 h-[2px] rounded-t-full",
                accentClasses[accentColor]
              )}
            />
          )}
        </button>
      ))}
    </div>
  );
}
