"use client";

import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/ui/social-link";
import { useLocale } from "@/context/locale";
import { getTranslations } from "@/lib/i18n";

export function Hero() {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const { HERO, SOCIAL_LINKS, CV_FILE } = translations;

  const handleDownloadCV = () => {
    window.open(CV_FILE, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />

      <div className="max-w-5xl w-full text-center z-10">
        <span className="uppercase tracking-[0.2em] text-primary mb-6 block font-light text-sm">
          {HERO.title}
        </span>

        <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 text-white leading-tight">
          {HERO.name.split(" ")[0]}{" "}
          <span className="text-gradient font-normal">
            {HERO.name.split(" ")[1]}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          {HERO.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16 font-light text-slate-400">
          {HERO.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button href="#contact" variant="primary">
            {HERO.cta.primary}
          </Button>
          <Button variant="ghost" onClick={handleDownloadCV}>
            {HERO.cta.secondary}
          </Button>
        </div>

        <div className="flex justify-center gap-8 mt-20 text-on-surface-variant">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink
              key={link.platform}
              platform={link.platform}
              href={link.href}
              label={link.label}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
