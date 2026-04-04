"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/context/locale";
import { getTranslations } from "@/lib/i18n";

export function ExperienceContent() {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const { EXPERIENCES, SECTION_HEADINGS } = translations;

  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeading
        title={SECTION_HEADINGS.experience.title}
        highlight={SECTION_HEADINGS.experience.highlight}
        centered
      />

      <div className="space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-0">
            {index > 0 && index < EXPERIENCES.length && (
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 -translate-x-1/2" />
            )}

            <div className="md:grid md:grid-cols-2 gap-12 items-center">
              <div className={exp.isLeft ? "md:text-right" : "md:text-left order-2"}>
                <span className="text-primary mb-2 block text-sm tracking-wider uppercase">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-light text-white">{exp.company}</h3>
                <p className="text-on-surface-variant text-sm mt-1 font-light">{exp.role}</p>
              </div>

              <GlassCard
                hover
                className={exp.isLeft ? "mt-4 md:mt-0" : "mt-4 md:mt-0 order-1"}
              >
                <p className="text-on-surface-variant font-light mb-3">
                  {exp.description}
                </p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant/80">
                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
