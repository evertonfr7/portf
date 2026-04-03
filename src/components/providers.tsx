"use client";

import { LocaleProvider } from "@/context/locale";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
