interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-4xl font-light tracking-tight mb-4">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-primary italic">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="text-on-surface-variant font-light">{subtitle}</p>
      )}
    </div>
  );
}
