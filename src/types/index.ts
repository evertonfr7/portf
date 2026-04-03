export interface Experience {
  id: string;
  period: string;
  company: string;
  description: string;
  isLeft?: boolean;
}

export interface Skill {
  name: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}
