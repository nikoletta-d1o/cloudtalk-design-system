import { cva, type VariantProps } from "class-variance-authority";
import { Sparkles, X } from "lucide-react";
import { cn } from "../utils";

const tagVariants = cva(
  "inline-flex items-center font-medium rounded-full text-gray-cool-800 border-2 border-transparent",
  {
    variants: {
      size: {
        sm: "px-1.5 py-0.5 text-xs gap-1",
        md: "px-2 py-1 text-xs gap-1.5",
        lg: "px-3 py-2 text-sm gap-1.5",
      },
      color: {
        grey: "bg-tag-grey",
        blue: "bg-tag-blue",
        cyan: "bg-tag-cyan",
        green: "bg-tag-green",
        indigo: "bg-tag-indigo",
        brown: "bg-tag-brown",
        yellow: "bg-tag-yellow",
        pink: "bg-tag-pink",
      },
      selected: {
        true: "border-gray-cool-800",
        false: "",
      },
    },
    defaultVariants: { size: "md", color: "grey", selected: false },
  }
);

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof tagVariants> {
  /** When true, renders a sparkle icon indicating the tag was AI-assigned */
  aiAssigned?: boolean;
  /** Callback when the remove button is clicked (renders the tag as removable) */
  onRemove?: () => void;
}

export function Tag({
  size,
  color,
  selected,
  aiAssigned,
  onRemove,
  className,
  children,
  ...props
}: TagProps) {
  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  const closeSize = size === "sm" ? "h-3 w-3" : "h-3 w-3";

  return (
    <span
      className={cn(tagVariants({ size, color, selected }), className)}
      {...props}
    >
      {aiAssigned && (
        <Sparkles className={cn(iconSize, "text-gray-cool-500 shrink-0")} />
      )}
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="inline-flex items-center text-gray-cool-800 opacity-60 hover:opacity-100"
        >
          <X className={cn(closeSize, "shrink-0")} />
        </button>
      )}
    </span>
  );
}

export interface TagGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TagGroup({
  className,
  children,
  ...props
}: TagGroupProps) {
  return (
    <div
      className={cn("flex flex-wrap gap-1.5", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { tagVariants };
