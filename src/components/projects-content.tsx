"use client";

import { PillBadge } from "@/components/ui/pill-badge";
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
            className="group relative liquid-glass ghost-border rounded-xl p-8 transition-all hover:scale-[1.02] hover:bg-white/[0.07] hover:shadow-[0_8px_40px_rgba(130,130,255,0.12)]"
          >
            <div className="h-1 bg-gradient-primary w-0 group-hover:w-full transition-all duration-500 absolute top-0 left-0 rounded-t-xl" />

            <div className="text-5xl font-light text-primary/30 mb-6 group-hover:text-primary transition-colors">
              {project.number}
            </div>

            <h3 className="text-xl font-light mb-4 leading-snug">
              {project.title}
            </h3>

            <p className="text-on-surface-variant font-light mb-6 text-sm leading-relaxed">
              {project.description}
            </p>

            {project.stack && project.stack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <PillBadge key={tech} className="!px-3 !py-1 !text-xs text-slate-400">
                    {tech}
                  </PillBadge>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 text-primary mt-auto">
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
