import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const tooltipVariants = cva(
  "relative inline-flex flex-col items-start text-white text-xs font-normal leading-[18px] tracking-[0.4px] text-center bg-brand-blue-900 shadow-[0px_4px_24px_rgba(0,0,0,0.16)]",
  {
    variants: {
      size: {
        sm: "px-1 py-0.5 rounded-md",
        lg: "p-2 rounded-lg",
      },
    },
    defaultVariants: { size: "lg" },
  }
);

export type TooltipArrow =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "left"
  | "right";

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  /** Position of the arrow caret */
  arrow?: TooltipArrow;
}

const arrowClasses: Record<TooltipArrow, string> = {
  "top-left":
    "before:absolute before:top-0 before:left-2 before:-translate-y-full before:border-[6px] before:border-transparent before:border-b-brand-blue-900",
  "top-center":
    "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:border-[6px] before:border-transparent before:border-b-brand-blue-900",
  "top-right":
    "before:absolute before:top-0 before:right-2 before:-translate-y-full before:border-[6px] before:border-transparent before:border-b-brand-blue-900",
  "bottom-left":
    "before:absolute before:bottom-0 before:left-2 before:translate-y-full before:border-[6px] before:border-transparent before:border-t-brand-blue-900",
  "bottom-center":
    "before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:translate-y-full before:border-[6px] before:border-transparent before:border-t-brand-blue-900",
  "bottom-right":
    "before:absolute before:bottom-0 before:right-2 before:translate-y-full before:border-[6px] before:border-transparent before:border-t-brand-blue-900",
  left: "before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:-translate-x-full before:border-[6px] before:border-transparent before:border-r-brand-blue-900",
  right:
    "before:absolute before:top-1/2 before:right-0 before:-translate-y-1/2 before:translate-x-full before:border-[6px] before:border-transparent before:border-l-brand-blue-900",
};

export function Tooltip({
  size,
  arrow,
  className,
  children,
  ...props
}: TooltipProps) {
  return (
    <div
      className={cn(
        tooltipVariants({ size }),
        "before:content-['']",
        arrow && arrowClasses[arrow],
        className
      )}
      role="tooltip"
      {...props}
    >
      {children}
    </div>
  );
}

export { tooltipVariants };
