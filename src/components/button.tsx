import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2, ChevronDown } from "lucide-react";
import { cn } from "../utils";

/* ── CVA variants ── */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 font-medium text-[13px] leading-5 tracking-[0.15px]",
    "transition-colors cursor-pointer",
    "disabled:pointer-events-none",
  ].join(" "),
  {
    variants: {
      /** Visual style */
      variant: {
        primary: [
          "bg-brand-blue text-white",
          "hover:bg-brand-blue-600",
          "active:bg-brand-blue-800",
          "disabled:bg-brand-blue-200",
        ].join(" "),
        secondary: [
          "bg-gray-cool-200 text-gray-cool-700",
          "hover:bg-gray-cool-300",
          "active:bg-gray-cool-400",
          "disabled:bg-gray-cool-200 disabled:text-white",
        ].join(" "),
        tertiary: [
          "bg-transparent text-gray-cool-700",
          "hover:bg-gray-cool-100",
          "active:bg-gray-cool-300",
          "disabled:bg-gray-cool-200 disabled:text-white",
        ].join(" "),
      },
      /** Shape of the button */
      shape: {
        square: "rounded-lg",
        circle: "rounded-full",
      },
      /** Size & padding preset */
      size: {
        /** Label button: text with optional leading/trailing icon */
        md: "min-w-[96px] px-3 py-2",
        /** Icon-only button (square or circle) — 36×36 */
        icon: "p-2.5",
        /** Number button — 36×36, smaller padding */
        number: "p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      shape: "square",
      size: "md",
    },
  }
);

/* ── Types ── */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Show a loading spinner and disable interaction */
  loading?: boolean;
  /** Icon element rendered before children */
  leadingIcon?: React.ReactNode;
  /** Icon element rendered after children */
  trailingIcon?: React.ReactNode;
}

/* ── Component ── */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      shape,
      size,
      loading = false,
      leadingIcon,
      trailingIcon,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, shape, size }), className)}
      {...props}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <>
          {leadingIcon}
          {children}
          {trailingIcon}
        </>
      )}
    </button>
  )
);

Button.displayName = "Button";

/* ── Split / Combo button ── */

export interface SplitButtonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  /** Visual style – same as Button */
  variant?: "primary" | "secondary" | "tertiary";
  /** Label button text */
  children: React.ReactNode;
  /** Icon rendered before the label */
  leadingIcon?: React.ReactNode;
  /** Callback when the main (label) part is clicked */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Callback when the dropdown chevron is clicked */
  onDropdownClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Disable the entire control */
  disabled?: boolean;
}

const splitVariantMap = {
  primary: {
    main: "bg-brand-blue hover:bg-brand-blue-600 active:bg-brand-blue-800 text-white disabled:bg-brand-blue-200",
    divider: "border-gray-cool-200/30",
    dropdown:
      "bg-brand-blue hover:bg-brand-blue-600 active:bg-brand-blue-800 text-white disabled:bg-brand-blue-200",
  },
  secondary: {
    main: "bg-gray-cool-200 hover:bg-gray-cool-300 active:bg-gray-cool-400 text-gray-cool-700 disabled:text-white",
    divider: "border-gray-cool-300",
    dropdown:
      "bg-gray-cool-200 hover:bg-gray-cool-300 active:bg-gray-cool-400 text-gray-cool-700 disabled:text-white",
  },
  tertiary: {
    main: "hover:bg-gray-cool-100 active:bg-gray-cool-300 text-gray-cool-700 disabled:bg-gray-cool-200 disabled:text-white",
    divider: "border-gray-cool-200",
    dropdown:
      "hover:bg-gray-cool-100 active:bg-gray-cool-300 text-gray-cool-700 disabled:bg-gray-cool-200 disabled:text-white",
  },
} as const;

export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(
  (
    {
      variant = "primary",
      children,
      leadingIcon,
      onClick,
      onDropdownClick,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const v = splitVariantMap[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-stretch overflow-hidden rounded-lg",
          className
        )}
        {...props}
      >
        <button
          type="button"
          disabled={disabled}
          onClick={onClick}
          className={cn(
            "inline-flex items-center gap-2 px-3 h-9 text-[13px] font-medium leading-5 tracking-[0.15px] transition-colors cursor-pointer disabled:pointer-events-none",
            v.main
          )}
        >
          {leadingIcon}
          {children}
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={onDropdownClick}
          className={cn(
            "inline-flex items-center justify-center w-8 h-9 transition-colors cursor-pointer disabled:pointer-events-none",
            `border-l-[0.3px] border-solid`,
            v.divider,
            v.dropdown
          )}
        >
          <ChevronDown className="size-4" />
        </button>
      </div>
    );
  }
);

SplitButton.displayName = "SplitButton";

export { buttonVariants };
