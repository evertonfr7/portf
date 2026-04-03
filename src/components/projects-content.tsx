"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/context/locale";
import { getTranslations } from "@/lib/i18n";

export function ProjectsContent() {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const { PROJECTS, SECTION_HEADINGS } = translations;

  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title={SECTION_HEADINGS.projects.title}
        highlight={SECTION_HEADINGS.projects.highlight}
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative liquid-glass ghost-border rounded-xl p-8 transition-all hover:scale-[1.02]"
          >
            <div className="h-1 bg-gradient-primary w-0 group-hover:w-full transition-all duration-500 absolute top-0 left-0 rounded-t-xl" />

            <div className="text-5xl font-light text-primary/30 mb-6 group-hover:text-primary transition-colors">
              {project.number}
            </div>

            <h3 className="text-2xl font-light mb-4">{project.title}</h3>

            <p className="text-on-surface-variant font-light mb-8">
              {project.description}
            </p>

            <div className="flex items-center gap-4 text-primary">
              <span className="text-3xl font-light">{project.metric}</span>
              <span className="uppercase text-[0.6rem] tracking-widest text-slate-500">
                {project.metricLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
