"use client";

import Image from "next/image";
import { useLocale } from "@/context/locale";
import { getTranslations } from "@/lib/i18n";

export function About() {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const { ABOUT, PROFILE_IMAGE } = translations;

  return (
    <section className="py-32 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-3xl group-hover:bg-primary/30 transition-all" />
            <div className="relative aspect-square rounded-xl overflow-hidden ghost-border bg-surface-container flex items-center justify-center">
              <Image
                src={PROFILE_IMAGE}
                alt={ABOUT.imageAlt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-light mb-10 tracking-tight">
              {ABOUT.title}
              <br />
              <span className="text-primary italic">
                {ABOUT.titleHighlight}
              </span>
            </h2>

            <div className="space-y-6 text-on-surface-variant text-lg font-light leading-relaxed">
              {ABOUT.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {ABOUT.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-light text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="uppercase text-slate-500 tracking-widest text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
