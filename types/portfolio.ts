export interface Project {
  id: string;
  title: string;
  category: "business" | "mobile" | "education" | "security" | "fullstack" | "all";
  categoryLabel: string;
  year?: string;
  summary: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  technologies: string[];
  metrics: { label: string; value: string }[];
  keyDeliverables: string[];
  role?: string;
  architectureHighlights: string[];
  challenge?: string;
  solution?: string;
  liveUrl?: string;
  repoUrl?: string;
  isVerifiedWork?: boolean;
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
  skills: { name: string; tag: string }[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  username: string;
}
