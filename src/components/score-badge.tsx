import { cn } from "../utils";

export interface ScoreBadgeProps {
  score: number;
  /** "badge" renders the pill with dot; "text" renders just colored text */
  variant?: "badge" | "text";
  className?: string;
}

export function getScoreColors(score: number) {
  if (score >= 70) return { bg: "bg-[#f1fedb]", dot: "bg-success", text: "text-success" };
  if (score >= 50) return { bg: "bg-[#fff6e9]", dot: "bg-warning", text: "text-warning" };
  return { bg: "bg-[#ffeced]", dot: "bg-error", text: "text-error" };
}

export function ScoreBadge({ score, variant = "badge", className }: ScoreBadgeProps) {
  const colors = getScoreColors(score);

  if (variant === "text") {
    return (
      <span className={cn("font-mono text-xs font-bold", colors.text, className)}>
        {score}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[5px] px-2 py-0.5 text-xs font-medium text-neutral-800",
        colors.bg,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", colors.dot)} />
      {score}
    </span>
  );
}
