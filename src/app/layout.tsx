import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const SITE_URL = "https://evertonfreitas.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Everton Freitas | Senior Full Stack Engineer",
    template: "%s | Everton Freitas",
  },
  description:
    "Senior Full Stack Engineer with 10+ years building high-performance web products. Expert in React, Next.js, TypeScript, Node.js, AI integrations, CRO and Core Web Vitals. Open for consulting.",
  keywords: [
    "Everton Freitas",
    "Senior Full Stack Engineer",
    "Engenheiro Full Stack Sênior",
    "React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Node.js Developer",
    "Frontend Engineer Brasil",
    "Web Performance",
    "Core Web Vitals",
    "CRO",
    "A/B Testing",
    "AI Integrations",
    "Micro-frontends",
    "Luizalabs",
    "Kirvano",
    "Buscapé",
    "Mosaico",
    "Python",
    "Go",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "PostgreSQL",
    "Tailwind CSS",
    "freelancer frontend brazil",
    "software engineer portfolio",
  ],
  authors: [{ name: "Everton Freitas", url: SITE_URL }],
  creator: "Everton Freitas",
  publisher: "Everton Freitas",
  category: "technology",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "pt-BR": SITE_URL,
      "en-US": SITE_URL,
    },
  },
  openGraph: {
    title: "Everton Freitas | Senior Full Stack Engineer",
    description:
      "10+ years building high-performance web products. React, Next.js, TypeScript, Node.js, AI integrations, CRO.",
    url: SITE_URL,
    siteName: "Everton Freitas Portfolio",
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Everton Freitas — Senior Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everton Freitas | Senior Full Stack Engineer",
    description:
      "10+ years building high-performance web products. React, Next.js, TypeScript, AI integrations.",
    creator: "@evertonfreitas",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
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
    alternateName: "Everton Fr.",
    jobTitle: "Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer with 10+ years building high-performance web products in React, Next.js, TypeScript, Node.js, Python and Go. Specialist in Web Performance, CRO, AI integrations and Micro-frontends.",
    url: SITE_URL,
    nationality: "Brazilian",
    image: `${SITE_URL}/images/profile.png`,
    sameAs: [
      "https://linkedin.com/in/evertonfr7",
      "https://github.com/evertonfr7",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "NestJS",
      "Python",
      "Go",
      "Django",
      "Flask",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "AWS",
      "Web Performance",
      "Core Web Vitals",
      "CRO",
      "A/B Testing",
      "AI Integrations",
      "Micro-frontends",
      "Tailwind CSS",
      "Three.js",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal do Ceará",
      alternateName: "UFC",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Full Stack Engineer",
      occupationalCategory: "15-1252.00",
      description:
        "Designs, develops and maintains high-performance web applications using React, Next.js, TypeScript and Node.js with focus on CRO and AI integrations.",
    },
    worksFor: {
      "@type": "Organization",
      name: "Luizalabs",
      url: "https://luizalabs.com",
    },
    workHistory: [
      {
        "@type": "Role",
        roleName: "Senior Full Stack Engineer",
        startDate: "2025-02",
        endDate: "2026-04",
        worksFor: {
          "@type": "Organization",
          name: "Luizalabs",
        },
      },
      {
        "@type": "Role",
        roleName: "Frontend Engineer",
        startDate: "2023-11",
        endDate: "2024-12",
        worksFor: {
          "@type": "Organization",
          name: "Kirvano",
        },
      },
      {
        "@type": "Role",
        roleName: "Frontend Engineer",
        startDate: "2021-11",
        endDate: "2023-11",
        worksFor: {
          "@type": "Organization",
          name: "Mosaico / Buscapé",
        },
      },
      {
        "@type": "Role",
        roleName: "Frontend Developer",
        startDate: "2018-06",
        endDate: "2021-11",
        worksFor: {
          "@type": "Organization",
          name: "MaquiADORO",
        },
      },
    ],
  };

  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        {/* suppressHydrationWarning is intentional: className="dark" and locale
            cause a known server/client divergence on <html>. Scope is limited. */}
        <script
          id="json-ld-person"
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
