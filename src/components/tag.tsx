import { cva, type VariantProps } from "class-variance-authority";
import { Sparkles } from "lucide-react";
import { cn } from "../utils";

const tagVariants = cva(
  "inline-flex items-center gap-1.5 font-medium rounded-full border border-gray-cool-200 bg-gray-cool-100 text-gray-cool-800",
  {
    variants: {
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  /** When true, renders a sparkle icon indicating the tag was AI-assigned */
  aiAssigned?: boolean;
}

export function Tag({
  size,
  aiAssigned,
  className,
  children,
  ...props
}: TagProps) {
  const iconSize = size === "lg" ? "h-3.5 w-3.5" : "h-3 w-3";

  return (
    <span className={cn(tagVariants({ size }), className)} {...props}>
      {aiAssigned && (
        <Sparkles className={cn(iconSize, "text-gray-cool-500 shrink-0")} />
      )}
      {children}
    </span>
  );
}

export { tagVariants };
