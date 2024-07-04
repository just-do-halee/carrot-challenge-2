import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, icon, className, type, ...props }, ref) => {
    return (
      <label htmlFor={id} className="relative size-full">
        <div className="absolute inset-y-0 left-4 flex items-center opacity-60">
          {icon}
        </div>
        <input
          id={id}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-full border border-input bg-transparent px-10 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </label>
    );
  }
);
Input.displayName = "Input";

export { Input };
