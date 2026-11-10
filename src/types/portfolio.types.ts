export interface StatItem {
  value: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  greeting: string;
  name: string;
  rolePrefix: string;
  roles: string[];
  tagline: string;
  aboutParagraphs: string[];
  stats: StatItem[];
  socialLinks: SocialLink[];
  email: string;
  resumePath: string;
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'ai-ml' | 'tools';
export type SkillLevel = 'Advanced' | 'Intermediate' | 'Proficient';

export interface SkillItem {
  id: string;
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  icon: string;
}

export type ProjectSchematic = 'lms' | 'blockchain' | 'iot' | 'math' | 'vision' | 'face' | 'generic';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  technologies: string[];
  codeUrl?: string;
  liveUrl?: string;
  schematic: ProjectSchematic;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  tag: string;
  iconType: 'ieee' | 'scrimba' | 'udemy' | 'university' | 'hackerrank' | 'generic';
  url?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  iconType: 'pin' | 'rocket' | 'trophy' | 'badge';
  date?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  statusBadge?: string;
  logoType: 'university' | 'institute' | 'college';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface AgileWorkflowStep {
  id: string;
  name: string;
  description?: string;
  icon: string;
  angle: number; // Position in degrees around the orbit (0-360)
}

