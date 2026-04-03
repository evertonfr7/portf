import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Everton Freitas | Engenheiro Full Stack Sênior",
  description:
    "Engenheiro Full Stack Sênior focado em Performance, CRO e produtos com IA. Desenvolvendo experiências digitais de alto nível para impacto global.",
  keywords: [
    "Engenheiro Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Performance Web",
    "Brasil",
  ],
  authors: [{ name: "Everton Freitas" }],
  openGraph: {
    title: "Everton Freitas | Engenheiro Full Stack Sênior",
    description:
      "Engenheiro Full Stack Sênior focado em Performance, CRO e produtos com IA.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everton Freitas | Engenheiro Full Stack Sênior",
    description:
      "Engenheiro Full Stack Sênior focado em Performance, CRO e produtos com IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Everton Freitas",
    jobTitle: "Engenheiro Full Stack Sênior",
    url: "https://evertonfreitas.dev",
    sameAs: [
      "https://linkedin.com/in/evertonfreitas",
      "https://github.com/evertonfreitas",
      "https://twitter.com/evertonfreitas",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Performance Web",
      "CRO",
      "Integrações com IA",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal do Ceará (UFC)",
    },
  };

  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} min-h-full flex flex-col antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
