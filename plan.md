# Plano: Portfólio — Everton Freitas

**Idioma: Português do Brasil (PT-BR)**

## Stack
- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript
- Deploy: Vercel (*.vercel.app)

## Design System
- Dark mode only, background: `#0e141b`
- Primary: `#c2c1ff` | Secondary: `#aac7ff`
- Liquid glass: `rgba(255,255,255,0.05)` + `backdrop-filter: blur(30px)`
- Font: Inter (100, 300, 400, 500, 700)
- Ghost border: `outline: 1px solid rgba(65,71,85,0.2)`

## Contato
- Formulário usa `mailto:everton7fr@gmail.com` (sem backend/Resend)

## Assets (a colocar em `/public/`)
- [ ] `images/profile.jpg` — foto de perfil
- [ ] `everton-freitas-cv.pdf` — currículo

## Estrutura do Projeto

```
portf/
├── public/
│   ├── images/
│   │   └── profile.jpg
│   └── everton-freitas-cv.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   │   ├── glass-card.tsx
│   │   │   ├── pill-badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── section-heading.tsx
│   │   │   └── social-link.tsx
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── lib/
│   │   └── constants.ts
│   └── types/
│       └── index.ts
├── next.config.ts
├── tailwind.config.ts
└── plan.md
```

## Seções
1. **Navbar** — Pill flutuante: logo "EF", links âncora, ícone dark mode
2. **Hero** — Nome, título, descrição, pills de stack, botões CTA, links sociais
3. **Sobre** — Foto (escala de cinza → cor no hover) + bio + stats (10+ anos, 90+ perf)
4. **Experiência** — Timeline: Luizalabs, Kirvano, Mosaico/Buscapé, MaquiADORO
5. **Habilidades** — Tag cloud: React, Next.js, TypeScript, Node.js, Web Perf, CRO, IA, Micro-FE, AWS, Tailwind
6. **Projetos** — 3 cards: Buscapé (+30% conversão), MaquiADORO DS (60→94 PageSpeed), Luizalabs (Enterprise)
7. **Contato** — Email + Telefone + Formulário com mailto:
8. **Rodapé** — Copyright + LinkedIn, GitHub, Twitter

## Fases de Implementação

### Fase 1 — Scaffold
- [ ] `npx create-next-app@latest` com TypeScript + Tailwind + App Router
- [ ] Configurar tema no `globals.css` (CSS custom properties + classes glass)
- [ ] Root layout com Inter font e metadata
- [ ] Tipos em `src/types/index.ts`
- [ ] Conteúdo em `src/lib/constants.ts`

### Fase 2 — Primitivos de UI
- [ ] `glass-card.tsx`
- [ ] `pill-badge.tsx`
- [ ] `button.tsx` (variantes: primary, ghost)
- [ ] `section-heading.tsx`
- [ ] `social-link.tsx`

### Fase 3 — Seções
- [ ] `navbar.tsx` (scroll suave, estado ativo por seção, menu mobile)
- [ ] `hero.tsx`
- [ ] `about.tsx`
- [ ] `experience.tsx`
- [ ] `skills.tsx`
- [ ] `projects.tsx`
- [ ] `contact.tsx` (formulário → `mailto:`)
- [ ] `footer.tsx`

### Fase 4 — Montagem
- [ ] `page.tsx` — composição de todas as seções
- [ ] `scroll-behavior: smooth` no html

### Fase 5 — Polimento
- [ ] Fade-in por scroll (Intersection Observer)
- [ ] Auditoria responsiva (320px, 768px, 1024px, 1440px)
- [ ] `next/image` para foto de perfil
- [ ] SEO: metadata, OG tags, JSON-LD Person schema
- [ ] Lighthouse target: 90+

### Fase 6 — Deploy
- [ ] Push para repositório Git
- [ ] Conectar ao Vercel
- [ ] Adicionar assets à `/public/` antes do deploy

## Critérios de Sucesso
- [ ] 8 seções renderizando corretamente em desktop e mobile
- [ ] Navbar com scroll suave e estado ativo
- [ ] Hover escala de cinza→cor na foto
- [ ] Formulário de contato abre cliente de email
- [ ] Lighthouse Performance 90+
- [ ] Deploy funcional no Vercel
