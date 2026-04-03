import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "px-10 py-5 rounded-full font-medium transition-transform active:scale-95";

  const variantClasses = {
    primary:
      "bg-gradient-primary text-on-primary-container shadow-lg shadow-primary/20 hover:shadow-primary/30",
    ghost:
      "liquid-glass ghost-border text-white hover:bg-white/10",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
