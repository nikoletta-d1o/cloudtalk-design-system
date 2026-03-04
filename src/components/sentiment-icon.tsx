import { Smile, Frown, Meh } from "lucide-react";
import { cn } from "../utils";

export interface SentimentIconProps {
  sentiment: string;
  /** sm = h-4 w-4, md = h-5 w-5 */
  size?: "sm" | "md";
  className?: string;
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
} as const;

export function SentimentIcon({ sentiment, size = "sm", className }: SentimentIconProps) {
  const sizeClass = sizeClasses[size];

  switch (sentiment) {
    case "positive":
      return <Smile className={cn(sizeClass, "text-success", className)} />;
    case "negative":
      return <Frown className={cn(sizeClass, "text-error", className)} />;
    case "mixed":
      return <Meh className={cn(sizeClass, "text-warning", className)} />;
    default:
      return <Meh className={cn(sizeClass, "text-gray-cool-400", className)} />;
  }
}
