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
  imageAlt: "Everton Freitas — Engenheiro Full Stack Sênior",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "luizalabs",
    period: "fev 2025 — abr 2026",
    company: "Luizalabs",
    role: "Desenvolvedor Web Full Stack",
    description:
      "Liderou projetos estratégicos em produtos de alto tráfego, integrando IA e práticas AI-first para acelerar entregas com qualidade.",
    highlights: [
      "Reformulou a frente de agências de devoluções — mais de 300 candidaturas na primeira semana do lançamento",
      "Desenvolveu módulo administrativo com IA integrada para validação de candidatos, reduzindo esforço manual da operação",
      "Introduziu Spec-Driven Design e fluxos AI-first no time, acelerando o ciclo de desenvolvimento",
      "Manteve 100% de cobertura de testes unitários em todas as aplicações front-end sob sua responsabilidade",
    ],
    isLeft: true,
  },
  {
    id: "kirvano",
    period: "nov 2023 — dez 2024",
    company: "Kirvano Pagamentos",
    role: "Engenheiro de Software Front-end",
    description:
      "Assumiu time travado no lançamento do produto de backoffice e, em 4 meses, entregou em produção.",
    highlights: [
      "Triplicou a capacidade de suporte a novos clientes e infoprodutores após o lançamento",
      "Evoluiu o design system e padronizou componentes, melhorando consistência e velocidade de desenvolvimento",
      "Otimizou componentes críticos, melhorando estabilidade visual e métricas de carregamento",
    ],
    isLeft: false,
  },
  {
    id: "buscape",
    period: "nov 2021 — nov 2023",
    company: "Mosaico / Buscapé",
    role: "Engenheiro de Software Full Stack",
    description:
      "Atuação full stack em projetos para Buscapé, Zoom e Banco PAN em ambientes de alta complexidade e alto tráfego.",
    highlights: [
      "Refatorou a página de busca com testes A/B contínuos — variantes vencedoras melhoraram KPIs-chave entre 10% e 30%",
      "Entregou nova experiência de busca guiada que aumentou engajamento e conversão com impacto direto em métricas de negócio",
    ],
    isLeft: true,
  },
  {
    id: "maquiadoro",
    period: "jul 2018 — nov 2021",
    company: "MaquiADORO",
    role: "Head de Tecnologia & Engenheiro Full Stack",
    description:
      "Liderou a transformação técnica completa da plataforma de e-commerce, definindo arquitetura e mentorando o time de engenharia.",
    highlights: [
      "Elevou o PageSpeed de 60 para 94 em mobile e desktop — melhoria de 57%",
      "Desenvolveu sistema financeiro interno auditável, aumentando a produtividade dos times em 40%",
      "Definiu arquitetura, padrões técnicos e liderou o time de engenharia",
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
  { name: "Docker", category: "Infraestrutura" },
  { name: "Kubernetes", category: "Infraestrutura" },
  { name: "AWS", category: "Infraestrutura" },
  { name: "Terraform", category: "Infraestrutura" },
  { name: "GitHub Actions", category: "Infraestrutura" },
  { name: "GitLab Pipelines", category: "Infraestrutura" },
  { name: "CI/CD", category: "Infraestrutura" },
  { name: "Firebase", category: "Infraestrutura" },
  { name: "Nginx", category: "Infraestrutura" },
  { name: "Datadog", category: "Observabilidade" },
  { name: "New Relic", category: "Observabilidade" },
  { name: "Grafana", category: "Observabilidade" },
  { name: "Google Analytics", category: "Observabilidade" },
  { name: "Unleash", category: "Observabilidade" },
  { name: "Spec-Driven Design", category: "IA & Produtividade" },
  { name: "Servidores MCP", category: "IA & Produtividade" },
  { name: "Fluxos AI-first", category: "IA & Produtividade" },
  { name: "IA Aplicada a Produtos", category: "IA & Produtividade" },
  { name: "Jupyter", category: "IA & Produtividade" },
  { name: "Conda", category: "IA & Produtividade" },
  { name: "Web Performance (Core Web Vitals)", category: "Arquitetura & Qualidade" },
  { name: "Testes A/B", category: "Arquitetura & Qualidade" },
  { name: "Testes Unitários (100% coverage)", category: "Arquitetura & Qualidade" },
  { name: "Jest", category: "Arquitetura & Qualidade" },
  { name: "Vitest", category: "Arquitetura & Qualidade" },
  { name: "React Testing Library", category: "Arquitetura & Qualidade" },
  { name: "Playwright", category: "Arquitetura & Qualidade" },
  { name: "Micro-frontends", category: "Arquitetura & Qualidade" },
  { name: "Acessibilidade (a11y)", category: "Arquitetura & Qualidade" },
  { name: "Scrum", category: "Arquitetura & Qualidade" },
  { name: "SonarQube", category: "Arquitetura & Qualidade" },
];

export const PROJECTS: Project[] = [
  {
    id: "buscape-refactor",
    number: "01",
    title: "Refatoração da Busca — Buscapé",
    description:
      "Refatoração ponta-a-ponta da página de resultados de busca do maior comparador de preços do Brasil. Implementei testes A/B contínuos, otimizei estratégias de renderização e reduzi TTI e LCP significativamente em um produto com milhões de acessos mensais.",
    stack: ["React", "Next.js", "TypeScript", "Node.js"],
    metric: "+30%",
    metricLabel: "KPI de Conversão",
  },
  {
    id: "maquiadoro-ds",
    number: "02",
    title: "Design System — MaquiADORO",
    description:
      "Refatoração completa do design system de um e-commerce de cosméticos com abordagem mobile-first. Redesenhei todos os componentes com SCSS, mixins reutilizáveis e carregamento adaptativo, impactando diretamente a conversão mobile.",
    stack: ["React", "SCSS", "Mobile-first"],
    metric: "60 → 94",
    metricLabel: "PageSpeed",
  },
  {
    id: "luizalabs-agency",
    number: "03",
    title: "Sistema de Agências — Luizalabs",
    description:
      "Liderei a substituição de um processo manual via Google Forms por uma aplicação própria para logística de devoluções. Integrei validação de endereços com IA + Maps API e mantive 100% de cobertura de testes do design doc ao deploy.",
    stack: ["React", "Next.js", "Node.js", "NestJS"],
    metric: "300+",
    metricLabel: "Candidaturas na 1ª semana",
  },
];

export const CONTACT = {
  title: "Vamos trabalhar",
  titleHighlight: "juntos",
  subtitle: "Disponível para oportunidades como Full Stack / Frontend Sênior — Remoto. Aberto a projetos de alto impacto em produtos digitais de alto tráfego.",
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
export const CV_FILE: string = "/cv_everton_freitas_pt.pdf";
