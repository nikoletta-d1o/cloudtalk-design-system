import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700",
        outline:
          "border border-primary-600 text-primary-600 hover:bg-primary-50 bg-white",
        ghost: "text-primary-600 hover:underline",
        icon: "text-gray-cool-400 hover:bg-gray-cool-100 hover:text-gray-cool-600",
      },
      size: {
        sm: "h-7 px-3 text-xs rounded-md gap-1",
        md: "h-9 px-4 text-sm rounded-lg gap-2",
        lg: "h-10 px-5 text-sm rounded-full gap-2",
        icon: "h-8 w-8 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { buttonVariants };
