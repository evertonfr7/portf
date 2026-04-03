import {
  Experience,
  Project,
  Skill,
  SocialLink,
  NavItem,
  Stat,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experience" },
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/evertonfr7", label: "LinkedIn" },
  { platform: "GitHub", href: "https://github.com/evertonfr7", label: "GitHub" },
];

export const HERO = {
  name: "Everton Freitas",
  title: "Engenheiro Full Stack Sênior",
  description:
    "Focado em Performance, CRO e produtos com IA. Desenvolvendo experiências digitais de alto nível para impacto global.",
  stack: ["Next.js", "React", "TypeScript", "Node.js"],
  cta: {
    primary: "Entre em contato",
    secondary: "Baixar CV",
  },
};

export const ABOUT = {
  title: "Construindo código com",
  titleHighlight: "precisão de engenharia",
  bio: [
    "Com mais de 10 anos de experiência, fechei a lacuna entre engenharia complexa e experiências de usuário perfeitas em pixels.",
    "Meu foco está em otimizar performance web, executar ciclos sofisticados de testes A/B e integrar IA em fluxos modernos de produtos. Engenharia de Computação pela UFC.",
  ],
  stats: [
    { value: "10+", label: "Anos de Experiência" },
    { value: "90+", label: "Score de Performance" },
  ] as Stat[],
  imageAlt: "Retrato profissional de Everton Freitas",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "luizalabs",
    period: "fev 2025 — abr 2026",
    company: "Luizalabs",
    description:
      "Liderando arquitetura para sistemas internos de agência e squads de e-commerce performance. Escalando micro-frontends baseados em React.",
    isLeft: true,
  },
  {
    id: "kirvano",
    period: "nov 2023 — dez 2024",
    company: "Kirvano",
    description:
      "Desenvolvedor central para plataforma de checkout em alto crescimento. Implementação de fluxos de pagamento focados em performance e integrações com IA.",
    isLeft: false,
  },
  {
    id: "buscape",
    period: "nov 2021 — nov 2023",
    company: "Mosaico / Buscapé",
    description:
      "Liderei refator dos resultados de busca, melhorando métricas-chave de conversão em 30% através de otimização extrema de React e ajuste de SSR.",
    isLeft: true,
  },
  {
    id: "maquiadoro",
    period: "jun 2018 — nov 2021",
    company: "MaquiADORO",
    description:
      "Engenharia de Design System customizado e migração de stack legado para JS moderno, alcançando scores de PageSpeed acima de 90.",
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
    title: "Refator Buscapé",
    description:
      "Refator ponta-a-ponta da página de resultados de busca. Otimizei TTI e LCP significativamente.",
    metric: "+30%",
    metricLabel: "KPI de Conversão",
  },
  {
    id: "maquiadoro-ds",
    number: "02",
    title: "Design System MaquiADORO",
    description:
      "Arquitetei um Design System escalável focado em performance lighthouse e reusabilidade.",
    metric: "60 → 94",
    metricLabel: "PageSpeed",
  },
  {
    id: "luizalabs-agency",
    number: "03",
    title: "Agência Luizalabs",
    description:
      "Sistema interno centralizado gerenciando operações de agência para um dos gigantes de varejo do Brasil.",
    metric: "Enterprise",
    metricLabel: "Escala",
  },
];

export const CONTACT = {
  title: "Vamos construir o",
  titleHighlight: "futuro",
  subtitle: "Aberto para consultorias estratégicas e projetos de alto impacto.",
  email: "everton7fr@gmail.com",
  phone: "+55 85 92163-0442",
  formLabels: {
    name: "Nome",
    message: "Mensagem",
    submit: "Enviar Solicitação",
    namePlaceholder: "João Silva",
    messagePlaceholder: "Descreva brevemente sua visão...",
  },
};

export const FOOTER = {
  copyright: "Everton Freitas. Feito com <3.",
};

export const SECTION_HEADINGS = {
  experience: { title: "Jornada", highlight: "Profissional" },
  skills: { title: "Ecossistema", highlight: "Técnico" },
  projects: { title: "Trabalhos", highlight: "Selecionados" },
};

export const PROFILE_IMAGE = "/images/profile.png";
export const CV_FILE = "/everton-freitas-cv.pdf";
