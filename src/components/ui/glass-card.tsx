import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = false }: GlassCardProps) {
  return (
    <div
      className={`liquid-glass ghost-border rounded-xl p-8 ${
        hover ? "transition-all hover:bg-white/10" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
