import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-full border border-[#DDD6C5] bg-white px-4 py-2 text-sm text-[#1E2B20] ring-offset-white placeholder:text-[#8D9B8E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#344B37] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
