"use client";

import { PillBadge } from "@/components/ui/pill-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/context/locale";
import { getTranslations } from "@/lib/i18n";

export function SkillsContent() {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const { SKILLS, SECTION_HEADINGS } = translations;

  const grouped = SKILLS.reduce<Record<string, string[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        title={SECTION_HEADINGS.skills.title}
        highlight={SECTION_HEADINGS.skills.highlight}
        centered
      />

      <div className="space-y-10">
        {Object.entries(grouped).map(([category, skills]) => (
          <div key={category}>
            <p className="text-xs tracking-widest uppercase text-primary mb-4 text-center">
              {category}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((name) => (
                <PillBadge key={name} variant="primary">
                  {name}
                </PillBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
