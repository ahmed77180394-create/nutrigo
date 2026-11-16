import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "warm" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#344B37] text-[#F5F1E8] hover:bg-[#263829] shadow-sm hover:shadow-md active:scale-[0.98] focus-visible:ring-[#344B37]",
      secondary:
        "bg-[#A5AD85] text-[#1E2B20] hover:bg-[#929B72] shadow-sm hover:shadow active:scale-[0.98] focus-visible:ring-[#A5AD85]",
      warm:
        "bg-[#D99B63] text-white hover:bg-[#C58850] shadow-sm hover:shadow-md active:scale-[0.98] focus-visible:ring-[#D99B63]",
      outline:
        "border border-[#344B37] text-[#344B37] hover:bg-[#344B37] hover:text-[#F5F1E8] active:scale-[0.98]",
      ghost:
        "text-[#344B37] hover:bg-[#EBE5D5] active:bg-[#DDD6C5]",
      link:
        "text-[#344B37] underline-offset-4 hover:underline p-0 h-auto font-semibold",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 rounded-full text-xs font-semibold tracking-wide",
      md: "h-11 px-5 rounded-full text-sm font-semibold tracking-wide",
      lg: "h-13 px-7 rounded-full text-base font-semibold tracking-wide",
      icon: "h-10 w-10 rounded-full",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
