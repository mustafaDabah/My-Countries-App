import * as React from "react";
import { ChevronDown } from "lucide-react";

const Select = React.forwardRef<HTMLSelectElement, React.ComponentProps<"select">>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={`flex h-10 w-full appearance-none rounded-md  border-input bg-background px-3 py-2 pr-10 text-base ring-offset-background focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${className}`}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform pointer-events-none text-muted-foreground" />
      </div>
    );
  },
);
Select.displayName = "Select";

export { Select };