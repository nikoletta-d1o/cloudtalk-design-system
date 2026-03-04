import { ArrowDownLeft, ArrowUpRight, ArrowLeftRight, Voicemail } from "lucide-react";
import { cn } from "../utils";
import type { CallDirection, CallOutcome } from "../types";

export interface CallTypeIconProps {
  direction: CallDirection;
  outcome: CallOutcome;
  /** Icon container size. Default "md" (36px). "sm" = 28px. */
  size?: "sm" | "md";
}

/*
 * Design reference: Figma "Call type explanation" (node 7583:1477)
 *
 * Inbound  answered  → light-blue circle,  blue  down-left arrow
 * Outbound answered  → light-mint circle,  green up-right arrow
 * Missed   (any dir) → light-red  circle,  red   down-left arrow (broken)
 * Voicemail          → light-gold circle,  amber voicemail icon
 */

const config: Record<
  string,
  { bg: string; iconColor: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  "inbound-answered": {
    bg: "bg-[#eef0ff]",
    iconColor: "text-[#4856e0]",
    Icon: ArrowDownLeft,
  },
  "outbound-answered": {
    bg: "bg-[#e0fff4]",
    iconColor: "text-[#17784e]",
    Icon: ArrowUpRight,
  },
  "inbound-missed": {
    bg: "bg-[#fef3f2]",
    iconColor: "text-[#f04438]",
    Icon: ArrowDownLeft,
  },
  "outbound-missed": {
    bg: "bg-[#fef3f2]",
    iconColor: "text-[#f04438]",
    Icon: ArrowUpRight,
  },
  "inbound-voicemail": {
    bg: "bg-[#fef9e8]",
    iconColor: "text-[#d4a00a]",
    Icon: Voicemail,
  },
  "outbound-voicemail": {
    bg: "bg-[#fef9e8]",
    iconColor: "text-[#d4a00a]",
    Icon: Voicemail,
  },
  "internal-answered": {
    bg: "bg-[#f0f0ff]",
    iconColor: "text-[#6b5ce7]",
    Icon: ArrowLeftRight,
  },
  "internal-missed": {
    bg: "bg-[#fef3f2]",
    iconColor: "text-[#f04438]",
    Icon: ArrowLeftRight,
  },
  "internal-voicemail": {
    bg: "bg-[#fef9e8]",
    iconColor: "text-[#d4a00a]",
    Icon: Voicemail,
  },
};

export function CallTypeIcon({ direction, outcome, size = "md" }: CallTypeIconProps) {
  const key = `${direction}-${outcome}`;
  const { bg, iconColor, Icon } = config[key] ?? config["inbound-answered"];

  const sizeClasses = size === "sm"
    ? "h-7 w-7"
    : "h-9 w-9";

  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-[13px]",
        sizeClasses,
        bg
      )}
    >
      <Icon className={cn(iconSize, iconColor)} />
    </div>
  );
}
