import {
  Experience,
  Project,
  Skill,
  SocialLink,
  NavItem,
  Stat,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/evertonfr7", label: "LinkedIn" },
  { platform: "GitHub", href: "https://github.com/evertonfr7", label: "GitHub" },
];

export const HERO = {
  name: "Everton Freitas",
  title: "Senior Full Stack Engineer",
  description:
    "Focused on Performance, CRO & AI-powered products. Engineering high-end digital experiences for global impact.",
  stack: ["Next.js", "React", "TypeScript", "Node.js"],
  cta: {
    primary: "Get in touch",
    secondary: "Download CV",
  },
};

export const ABOUT = {
  title: "Crafting code with",
  titleHighlight: "engineering precision",
  bio: [
    "With over 10 years of experience, I've bridged the gap between complex engineering and pixel-perfect user experiences.",
    "My focus lies in optimizing web performance, running sophisticated A/B testing cycles, and integrating AI into modern product workflows. Computer Engineering degree from UFC.",
  ],
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "90+", label: "Performance Score" },
  ] as Stat[],
  imageAlt: "Professional portrait of Everton Freitas",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "luizalabs",
    period: "Feb 2025 — Apr 2026",
    company: "Luizalabs",
    description:
      "Leading architecture for internal agency systems and e-commerce performance squads. Scaling React-based micro-frontends.",
    isLeft: true,
  },
  {
    id: "kirvano",
    period: "Nov 2023 — Dec 2024",
    company: "Kirvano",
    description:
      "Core developer for a high-growth checkout platform. Implementation of performance-first payment flows and AI integrations.",
    isLeft: false,
  },
  {
    id: "buscape",
    period: "Nov 2021 — Nov 2023",
    company: "Mosaico / Buscapé",
    description:
      "Led the search results refactor, improving key conversion metrics by 30% through extreme React optimization and SSR tuning.",
    isLeft: true,
  },
  {
    id: "maquiadoro",
    period: "Jun 2018 — Nov 2021",
    company: "MaquiADORO",
    description:
      "Engineered a custom Design System and migrated legacy stack to modern JS, achieving PageSpeed scores above 90.",
    isLeft: false,
  },
];

export const SKILLS: Skill[] = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Web Performance" },
  { name: "CRO & A/B Testing" },
  { name: "AI Integrations" },
  { name: "Micro-frontends" },
  { name: "AWS" },
  { name: "Tailwind CSS" },
];

export const PROJECTS: Project[] = [
  {
    id: "buscape-refactor",
    number: "01",
    title: "Buscapé Refactor",
    description:
      "End-to-end refactor of the search results page. Optimized TTI and LCP significantly.",
    metric: "+30%",
    metricLabel: "Conversion KPI",
  },
  {
    id: "maquiadoro-ds",
    number: "02",
    title: "MaquiADORO DS",
    description:
      "Architected a scalable Design System focused on lighthouse performance and reusability.",
    metric: "60 → 94",
    metricLabel: "PageSpeed",
  },
  {
    id: "luizalabs-agency",
    number: "03",
    title: "Luizalabs Agency",
    description:
      "Centralized internal system managing agency operations for one of Brazil's retail giants.",
    metric: "Enterprise",
    metricLabel: "Scale",
  },
];

export const CONTACT = {
  title: "Let's build the",
  titleHighlight: "future",
  subtitle: "Open for strategic consultations and high-impact projects.",
  email: "everton7fr@gmail.com",
  phone: "+55 85 92163-0442",
  formLabels: {
    name: "Name",
    message: "Message",
    submit: "Send Request",
    namePlaceholder: "John Doe",
    messagePlaceholder: "Briefly describe your vision...",
  },
};

export const FOOTER = {
  copyright: "Everton Freitas. Made with <3.",
};

export const SECTION_HEADINGS = {
  experience: { title: "Professional", highlight: "Journey" },
  skills: { title: "Technical", highlight: "Ecosystem" },
  projects: { title: "Selected", highlight: "Works" },
};

export const PROFILE_IMAGE = "/images/profile.png";
export const CV_FILE = "/everton-freitas-cv.pdf";
