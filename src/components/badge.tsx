import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../utils";

const badgeVariants = cva(
  "inline-flex items-center font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary-100 text-gray-cool-800",
        success: "bg-success-100 text-gray-cool-800",
        warning: "bg-warning-100 text-gray-cool-800",
        error: "bg-error-light text-gray-cool-800",
        neutral: "bg-gray-cool-100 text-gray-cool-800",
        primary: "bg-primary-50 text-primary-700",
        blue: "bg-primary-100 text-gray-cool-800",
      },
      size: {
        sm: "rounded-[4px] px-2 py-0.5 text-xs",
        md: "rounded-[8px] px-2 py-1 text-xs",
        lg: "rounded-[8px] px-2.5 py-1 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  onRemove?: () => void;
}

export function Badge({
  variant,
  size,
  onRemove,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {children}
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 inline-flex items-center text-current opacity-60 hover:opacity-100"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
}

export { badgeVariants };
