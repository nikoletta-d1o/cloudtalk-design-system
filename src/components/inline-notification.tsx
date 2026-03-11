import { cn } from "../utils";
import { AlertCircle, Info, CheckCircle2, XCircle } from "lucide-react";

/* ── Variant config ── */

const variants = {
  warning: {
    container: "border-warning-100 bg-warning-light",
    icon: "text-warning",
    link: "text-warning-700 hover:text-warning-800",
    Icon: AlertCircle,
  },
  info: {
    container: "border-primary-200 bg-primary-50",
    icon: "text-primary-600",
    link: "text-primary-600 hover:text-primary-700",
    Icon: Info,
  },
  success: {
    container: "border-success-100 bg-success-50",
    icon: "text-success",
    link: "text-success-600 hover:text-success-600",
    Icon: CheckCircle2,
  },
  error: {
    container: "border-error bg-error/5",
    icon: "text-error",
    link: "text-error hover:text-error",
    Icon: XCircle,
  },
} as const;

type Variant = keyof typeof variants;

/* ── Props ── */

interface InlineNotificationLink {
  label: string;
  href: string;
}

export interface InlineNotificationProps {
  /** Visual style. Default "warning". */
  variant?: Variant;
  /** Main message displayed in the banner. */
  children: React.ReactNode;
  /** Optional action link shown on the right side. */
  link?: InlineNotificationLink;
  /** Additional classes on the outer container. */
  className?: string;
}

/* ── Component ── */

export function InlineNotification({
  variant = "warning",
  children,
  link,
  className,
}: InlineNotificationProps) {
  const v = variants[variant];
  const IconComp = v.Icon;

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border px-3 py-2",
        v.container,
        className,
      )}
      role="alert"
    >
      <IconComp className={cn("mt-0.5 h-4 w-4 shrink-0", v.icon)} />
      <div className="flex flex-1 items-center justify-between gap-4">
        <div className="text-sm text-gray-cool-900">{children}</div>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "shrink-0 text-sm font-medium hover:underline",
              v.link,
            )}
          >
            {link.label} &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
