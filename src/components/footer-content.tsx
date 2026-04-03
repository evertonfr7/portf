"use client";

import { SocialLink } from "@/components/ui/social-link";
import { useLocale } from "@/context/locale";
import { getTranslations } from "@/lib/i18n";

export function FooterContent() {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const { FOOTER, SOCIAL_LINKS } = translations;

  return (
    <footer className="w-full py-12 flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto border-t border-white/5 text-[0.75rem] uppercase tracking-[0.05em]">
      <div className="text-slate-500 mb-6 md:mb-0">
        © {new Date().getFullYear()} {FOOTER.copyright}
      </div>

      <div className="flex gap-8">
        {SOCIAL_LINKS.map((link) => (
          <SocialLink
            key={link.platform}
            platform={link.platform}
            href={link.href}
            label={link.label}
          />
        ))}
      </div>
    </footer>
  );
}
