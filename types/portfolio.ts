export interface Project {
  id: string;
  title: string;
  clientOrOrg: string;
  category: "fullstack" | "security" | "infrastructure";
  categoryLabel: string;
  year: string;
  summary: string;
  description: string;
  image: string;
  fallbackGradient: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  keyDeliverables: string[];
  role: string;
  architectureHighlights: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  badgeType: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: "Advanced" | "Proficient" | "Working Knowledge" }[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  username: string;
  icon: string;
}
