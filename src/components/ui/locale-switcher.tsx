"use client";

import { useLocale } from "@/context/locale";
import type { Locale } from "@/lib/i18n";

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();

  const toggleLocale = () => {
    const newLocale: Locale = locale === "pt-BR" ? "en-US" : "pt-BR";
    setLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLocale}
      className="text-sm font-light tracking-wider text-slate-400 hover:text-white transition-colors uppercase"
      title={locale === "pt-BR" ? "Switch to English" : "Mudar para Português"}
    >
      {locale === "pt-BR" ? "EN" : "PT"}
    </button>
  );
}
