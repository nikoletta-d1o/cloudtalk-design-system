import { cn } from "../utils";

export interface SegmentedControlOption {
  label: string;
  value: string;
}

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** The list of options to display */
  options: SegmentedControlOption[];
  /** The currently selected value */
  value: string;
  /** Callback when the selected value changes */
  onChange: (value: string) => void;
}

export function SegmentedControl({
  options,
  value,
  onChange,
  className,
  ...props
}: SegmentedControlProps) {
  return (
    <div
      className={cn(
        "inline-flex gap-1 rounded-lg bg-[#e0e4e8] p-0.5",
        className
      )}
      role="tablist"
      {...props}
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              "flex-1 flex items-center justify-center h-7 px-6 rounded-md text-xs font-medium leading-6 tracking-[0.15px] whitespace-nowrap transition-all",
              isActive
                ? "bg-white text-[#212629] shadow-card"
                : "text-[#636d7b] hover:text-[#212629]"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
