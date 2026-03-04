import { cn } from "../utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "default" adds p-5 padding, "flush" has no padding + overflow-hidden (for tables) */
  padding?: "default" | "flush";
}

export function Card({
  padding = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-gray-cool-200 bg-white shadow-card",
        padding === "default" && "p-5",
        padding === "flush" && "overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
