interface SocialLinkProps {
  platform?: string;
  href: string;
  label: string;
}

export function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors flex items-center gap-2 uppercase text-[0.7rem] tracking-widest font-light"
    >
      {label}
    </a>
  );
}
