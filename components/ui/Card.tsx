import { cn } from "@/lib/utils/cn";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: "indigo" | "cyan" | "none";
}

export function Card({ className, glow = "none", children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-ink-card border border-ink-border rounded-2xl p-6 transition-all duration-200",
        glow === "indigo" && "hover:shadow-lg hover:shadow-indigo/10 hover:border-indigo/30",
        glow === "cyan" && "hover:shadow-lg hover:shadow-cyan/10 hover:border-cyan/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}