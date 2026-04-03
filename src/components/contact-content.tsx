"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/context/locale";
import { getTranslations } from "@/lib/i18n";

export function ContactContent() {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const CONTACT = translations.CONTACT;

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phone = CONTACT.phone.replace(/\D/g, "");
    const message = encodeURIComponent(
      `*Nome:* ${formData.name}\n\n*Mensagem:*\n${formData.message}`
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <SectionHeading
          title={CONTACT.title}
          highlight={CONTACT.titleHighlight}
          centered
        />
        <p className="text-on-surface-variant font-light">
          {CONTACT.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <span className="uppercase text-primary tracking-widest mb-4 block text-xs">
              Email
            </span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-2xl font-light hover:text-primary transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>

          <div>
            <span className="uppercase text-primary tracking-widest mb-4 block text-xs">
              {locale === "pt-BR" ? "Telefone" : "Phone"}
            </span>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="text-2xl font-light hover:text-primary transition-colors"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>

        <GlassCard>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="group">
              <label className="text-slate-500 mb-2 block uppercase tracking-widest text-xs">
                {CONTACT.formLabels.name}
              </label>
              <input
                type="text"
                placeholder={CONTACT.formLabels.namePlaceholder}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-all px-0 py-2 placeholder:text-slate-700 text-white"
              />
            </div>

            <div className="group">
              <label className="text-slate-500 mb-2 block uppercase tracking-widest text-xs">
                {CONTACT.formLabels.message}
              </label>
              <textarea
                placeholder={CONTACT.formLabels.messagePlaceholder}
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-all px-0 py-2 placeholder:text-slate-700 resize-none text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-primary text-on-primary-container py-4 rounded-full font-medium transition-transform active:scale-95"
            >
              {CONTACT.formLabels.submit}
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
