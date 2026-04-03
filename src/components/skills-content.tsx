"use client";

import { PillBadge } from "@/components/ui/pill-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/context/locale";
import { getTranslations } from "@/lib/i18n";

export function SkillsContent() {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const { SKILLS, SECTION_HEADINGS } = translations;

  return (
    <div className="max-w-5xl mx-auto text-center">
      <SectionHeading
        title={SECTION_HEADINGS.skills.title}
        highlight={SECTION_HEADINGS.skills.highlight}
        centered
      />

      <div className="flex flex-wrap justify-center gap-4">
        {SKILLS.map((skill) => (
          <PillBadge key={skill.name} variant="primary">
            {skill.name}
          </PillBadge>
        ))}
      </div>
    </div>
  );
}
