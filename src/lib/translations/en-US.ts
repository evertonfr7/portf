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
  imageAlt: "Everton Freitas — Senior Full Stack Engineer",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "luizalabs",
    period: "Feb 2025 — Apr 2026",
    company: "Luizalabs",
    role: "Full Stack Web Developer",
    description:
      "Led strategic projects on high-traffic products, integrating AI and AI-first practices to accelerate delivery with quality.",
    highlights: [
      "Rebuilt the agency returns system — 300+ applications submitted in the first week after launch",
      "Built an AI-powered admin module for candidate validation, reducing manual effort for the operations team",
      "Introduced Spec-Driven Design and AI-first workflows to the team, boosting delivery speed and quality",
      "Maintained 100% unit test coverage across all front-end applications under ownership",
    ],
    isLeft: true,
  },
  {
    id: "kirvano",
    period: "Nov 2023 — Dec 2024",
    company: "Kirvano Pagamentos",
    role: "Front-end Software Engineer",
    description:
      "Took over a stalled product launch and shipped the backoffice platform to production in 4 months.",
    highlights: [
      "Tripled the support capacity for new clients and digital product creators post-launch",
      "Evolved the design system and standardized components, improving consistency and development velocity",
      "Optimized critical components, improving visual stability and loading metrics",
    ],
    isLeft: false,
  },
  {
    id: "buscape",
    period: "Nov 2021 — Nov 2023",
    company: "Mosaico / Buscapé",
    role: "Full Stack Software Engineer",
    description:
      "Full stack work across projects for Buscapé, Zoom, and Banco PAN in high-complexity, high-traffic environments.",
    highlights: [
      "Refactored the search page with continuous A/B testing — winning variants improved key KPIs by 10–30%",
      "Shipped a new guided search experience that increased engagement and conversion with direct business impact",
    ],
    isLeft: true,
  },
  {
    id: "maquiadoro",
    period: "Jul 2018 — Nov 2021",
    company: "MaquiADORO",
    role: "Head of Technology & Full Stack Engineer",
    description:
      "Led the full technical transformation of an e-commerce platform, defining architecture and mentoring the engineering team.",
    highlights: [
      "Raised PageSpeed from 60 to 94 on mobile and desktop — a 57% improvement",
      "Built an auditable internal financial system, increasing team productivity by 40%",
      "Defined architecture, technical standards, and led the engineering team",
    ],
    isLeft: false,
  },
];

export const SKILLS: Skill[] = [
  { name: "React", category: "Front-end" },
  { name: "Next.js", category: "Front-end" },
  { name: "TypeScript", category: "Front-end" },
  { name: "JavaScript", category: "Front-end" },
  { name: "HTML & CSS", category: "Front-end" },
  { name: "Tailwind CSS", category: "Front-end" },
  { name: "Vite", category: "Front-end" },
  { name: "Material UI", category: "Front-end" },
  { name: "shadcn/ui", category: "Front-end" },
  { name: "Three.js", category: "Front-end" },
  { name: "Node.js", category: "Back-end" },
  { name: "NestJS", category: "Back-end" },
  { name: "Express", category: "Back-end" },
  { name: "Python", category: "Back-end" },
  { name: "Go", category: "Back-end" },
  { name: "Django", category: "Back-end" },
  { name: "Flask", category: "Back-end" },
  { name: "Socket.IO", category: "Back-end" },
  { name: "GraphQL", category: "Back-end" },
  { name: "PostgreSQL", category: "Back-end" },
  { name: "MongoDB", category: "Back-end" },
  { name: "SQL", category: "Back-end" },
  { name: "Prisma", category: "Back-end" },
  { name: "Docker", category: "Infrastructure" },
  { name: "Kubernetes", category: "Infrastructure" },
  { name: "AWS", category: "Infrastructure" },
  { name: "Terraform", category: "Infrastructure" },
  { name: "GitHub Actions", category: "Infrastructure" },
  { name: "GitLab Pipelines", category: "Infrastructure" },
  { name: "CI/CD", category: "Infrastructure" },
  { name: "Firebase", category: "Infrastructure" },
  { name: "Nginx", category: "Infrastructure" },
  { name: "Datadog", category: "Observability" },
  { name: "New Relic", category: "Observability" },
  { name: "Grafana", category: "Observability" },
  { name: "Google Analytics", category: "Observability" },
  { name: "Unleash", category: "Observability" },
  { name: "Spec-Driven Design", category: "AI & Productivity" },
  { name: "MCP Servers", category: "AI & Productivity" },
  { name: "AI-first Workflows", category: "AI & Productivity" },
  { name: "Applied AI", category: "AI & Productivity" },
  { name: "Jupyter", category: "AI & Productivity" },
  { name: "Conda", category: "AI & Productivity" },
  { name: "Web Performance (Core Web Vitals)", category: "Architecture & Quality" },
  { name: "A/B Testing", category: "Architecture & Quality" },
  { name: "Unit Testing (100% coverage)", category: "Architecture & Quality" },
  { name: "Jest", category: "Architecture & Quality" },
  { name: "Vitest", category: "Architecture & Quality" },
  { name: "React Testing Library", category: "Architecture & Quality" },
  { name: "Playwright", category: "Architecture & Quality" },
  { name: "Micro-frontends", category: "Architecture & Quality" },
  { name: "Accessibility (a11y)", category: "Architecture & Quality" },
  { name: "Scrum", category: "Architecture & Quality" },
  { name: "SonarQube", category: "Architecture & Quality" },
];

export const PROJECTS: Project[] = [
  {
    id: "buscape-refactor",
    number: "01",
    title: "Search Refactor — Buscapé",
    description:
      "End-to-end refactor of the search results page at Brazil's largest price comparison platform. Ran continuous A/B tests, optimized rendering strategies, and significantly reduced TTI and LCP on a product with millions of monthly visits.",
    stack: ["React", "Next.js", "TypeScript", "Node.js"],
    metric: "+30%",
    metricLabel: "Conversion KPI",
  },
  {
    id: "maquiadoro-ds",
    number: "02",
    title: "Design System — MaquiADORO",
    description:
      "Full redesign of a cosmetics e-commerce design system with a mobile-first approach. Rebuilt all components with SCSS, reusable mixins and adaptive loading, directly impacting mobile conversion rates.",
    stack: ["React", "SCSS", "Mobile-first"],
    metric: "60 → 94",
    metricLabel: "PageSpeed",
  },
  {
    id: "luizalabs-agency",
    number: "03",
    title: "Agency System — Luizalabs",
    description:
      "Led the replacement of a manual Google Forms process with a purpose-built application for returns logistics. Integrated AI-powered address validation + Maps API and maintained 100% test coverage from design doc to deploy.",
    stack: ["React", "Next.js", "Node.js", "NestJS"],
    metric: "300+",
    metricLabel: "Applications in week 1",
  },
];

export const CONTACT = {
  title: "Let's work",
  titleHighlight: "together",
  subtitle: "Available for Senior Full Stack / Frontend roles — Remote. Open to high-impact projects on high-traffic digital products.",
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
export const CV_FILE: string = "/cv_everton_freitas_en.pdf";
