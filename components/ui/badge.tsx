import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "warm" | "outline" | "forest";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "bg-[#EBE5D5] text-[#344B37] border-transparent font-medium",
    secondary: "bg-[#A5AD85]/20 text-[#344B37] border-[#A5AD85]/40 font-medium",
    warm: "bg-[#D99B63]/15 text-[#9E5D24] border-[#D99B63]/30 font-semibold",
    forest: "bg-[#344B37] text-[#F5F1E8] border-transparent font-medium",
    outline: "border border-[#DDD6C5] text-[#5A695C] bg-white/70",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
