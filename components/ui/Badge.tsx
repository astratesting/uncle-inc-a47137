import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "info";
  className?: string;
}

const badgeVariants = {
  default: "bg-ink-black-light text-text-secondary border-ink-border",
  success: "bg-teal/10 text-teal border-teal/20",
  warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  info: "bg-cyan/10 text-cyan border-cyan/20",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}