interface PillBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary";
  className?: string;
}

export function PillBadge({
  children,
  variant = "default",
  className = "",
}: PillBadgeProps) {
  return (
    <span
      className={`liquid-glass ghost-border px-6 py-3 rounded-full text-sm font-light tracking-wide transition-all cursor-default ${
        variant === "primary"
          ? "hover:bg-primary/20 hover:text-primary"
          : "hover:bg-white/10"
      } ${className}`}
    >
      {children}
    </span>
  );
}
