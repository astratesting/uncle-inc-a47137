import { cn } from "@/lib/utils/cn";
import { type TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-secondary mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-2.5 bg-ink-black border rounded-xl text-text-primary placeholder:text-text-muted transition-colors duration-200 resize-none",
            "focus:outline-none focus:ring-2 focus:ring-indigo/50 focus:border-indigo",
            error
              ? "border-red-500 focus:ring-red-500/50 focus:border-red-500"
              : "border-ink-border",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";