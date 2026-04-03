import * as ptBR from "./translations/pt-BR";
import * as enUS from "./translations/en-US";

export type Locale = "pt-BR" | "en-US";

type Translations = typeof ptBR;

const translations: Record<Locale, Translations> = {
  "pt-BR": ptBR,
  "en-US": enUS,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations["pt-BR"];
}

export function isValidLocale(locale: string): locale is Locale {
  return locale === "pt-BR" || locale === "en-US";
}
