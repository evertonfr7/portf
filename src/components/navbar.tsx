"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/context/locale";
import { getTranslations } from "@/lib/i18n";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";

export function Navbar() {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const NAV_ITEMS = translations.NAV_ITEMS;

  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 mt-6 rounded-full w-[90%] max-w-5xl bg-white/40 dark:bg-white/5 backdrop-blur-[30px] flex justify-between items-center px-8 py-4 z-50 outline outline-1 outline-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
      <div className="text-xl font-light tracking-[0.2em] text-white">
        EF
      </div>

      <div className="hidden md:flex gap-12 items-center font-light tracking-tight">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`transition-colors ${
              activeSection === item.href.substring(1)
                ? "text-primary font-medium"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}
        <div className="w-px h-6 bg-white/10" />
        <LocaleSwitcher />
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full mt-4 left-0 right-0 md:hidden">
          <div className="liquid-glass ghost-border rounded-xl p-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-primary font-medium"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="w-full h-px bg-white/10 my-2" />
            <div className="flex justify-center">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
