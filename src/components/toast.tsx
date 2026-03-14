import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react";
import { cn } from "../utils";

const toastVariants = cva(
  "bg-white rounded-xl shadow-[0px_0px_1px_0px_rgba(10,22,76,0.4),0px_12px_36px_0px_rgba(24,34,67,0.08)] w-[400px]",
  {
    variants: {
      variant: {
        info: "",
        success: "",
        warning: "",
        error: "",
      },
    },
    defaultVariants: { variant: "info" },
  }
);

const iconConfig = {
  info: { icon: Info, className: "bg-brand-blue text-white" },
  success: { icon: CheckCircle, className: "bg-success-400 text-white" },
  warning: { icon: AlertCircle, className: "bg-warning-400 text-white" },
  error: { icon: XCircle, className: "bg-error text-white" },
} as const;

export interface ToastProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof toastVariants> {
  /** Toast title (bold text) */
  title: string;
  /** Message shown inline with title (horizontal) or as description (vertical) */
  message?: string;
  /** Optional action link text (horizontal layout only) */
  actionLabel?: string;
  /** Callback when action link is clicked */
  onAction?: () => void;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Layout type */
  layout?: "horizontal" | "vertical";
  /** Label for the cancel button (vertical layout only) */
  cancelLabel?: string;
  /** Label for the confirm button (vertical layout only) */
  confirmLabel?: string;
  /** Callback when cancel button is clicked (vertical layout only) */
  onCancel?: () => void;
  /** Callback when confirm button is clicked (vertical layout only) */
  onConfirm?: () => void;
}

export function Toast({
  variant = "info",
  title,
  message,
  actionLabel,
  onAction,
  onClose,
  layout = "horizontal",
  cancelLabel = "Cancel",
  confirmLabel = "Ok",
  onCancel,
  onConfirm,
  className,
  ...props
}: ToastProps) {
  const v = variant ?? "info";
  const { icon: Icon, className: iconClassName } = iconConfig[v];

  if (layout === "vertical") {
    return (
      <div
        className={cn(toastVariants({ variant }), "flex flex-col", className)}
        {...props}
      >
        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "inline-flex items-center justify-center shrink-0 size-6 rounded-full",
                iconClassName
              )}
            >
              <Icon className="size-3.5" />
            </span>
            <p className="flex-1 text-base font-medium leading-[22px] tracking-[0.05px] text-gray-cool-900">
              {title}
            </p>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center shrink-0 size-6 rounded-full bg-neutral-100 text-gray-cool-700 hover:bg-neutral-200"
              >
                <X className="size-3" />
              </button>
            )}
          </div>
          {message && (
            <p className="text-sm leading-5 tracking-[0.05px] text-gray-cool-700">
              {message}
            </p>
          )}
        </div>
        {(onCancel || onConfirm) && (
          <div className="flex items-center justify-end gap-2 px-4 pb-4">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="min-w-[80px] px-2 py-1 rounded-md text-[13px] font-medium leading-5 tracking-[0.15px] text-gray-cool-700 hover:bg-neutral-50"
              >
                {cancelLabel}
              </button>
            )}
            {onConfirm && (
              <button
                type="button"
                onClick={onConfirm}
                className="min-w-[80px] px-2 py-1 rounded-md text-[13px] font-medium leading-5 tracking-[0.15px] text-white bg-brand-blue hover:bg-primary-700"
              >
                {confirmLabel}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        toastVariants({ variant }),
        "flex items-center gap-4 p-4",
        className
      )}
      {...props}
    >
      <div className="flex flex-1 items-center gap-3">
        <span
          className={cn(
            "inline-flex items-center justify-center shrink-0 size-5 rounded-full",
            iconClassName
          )}
        >
          <Icon className="size-3" />
        </span>
        <p className="flex-1 text-sm leading-5 tracking-[0.15px] text-neutral-900">
          <span className="font-medium">{title}</span>
          {message && (
            <span className="tracking-[0.05px]">{` ${message}`}</span>
          )}
        </p>
      </div>
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="shrink-0 text-sm font-medium leading-5 tracking-[0.05px] text-brand-blue hover:underline"
        >
          {actionLabel}
        </button>
      )}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 text-gray-cool-400 hover:text-gray-cool-600"
        >
          <X className="size-5" />
        </button>
      )}
    </div>
  );
}

export { toastVariants };
