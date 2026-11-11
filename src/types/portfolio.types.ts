export interface StatItem {
  value: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface PersonalInfo {
  greeting: string;
  name: string;
  primaryTitle: string;
  rolePrefix?: string;
  animatedTitles: string[];
  university: string;
  location: string;
  email: string;
  phone?: string;
  availability?: string;
  primaryCTA: string;
  secondaryCTA: string;
  tagline?: string;
  aboutParagraphs: string[];
  stats?: StatItem[];
  socialLinks: SocialLink[];
  profileImage?: string;
  resumePath?: string;
}

export type SkillCategory = 
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'ai-ml'
  | 'embedded'
  | 'tools'
  | 'concepts'
  | 'soft-skills'
  | 'mobile';

export interface TechStackGroup {
  id: string;
  name: string;
  badge?: string;
  technologies: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: string;
  level?: string; // Optional: Left undefined until verified
}

export interface SkillCategoryGroup {
  id: SkillCategory;
  title: string;
  skills: SkillItem[];
}

export type ProjectType = 'Academic Group Project' | 'Individual Project';
export type ProjectSchematic = 'transit' | 'accommodation' | 'healthcare' | 'fitness' | 'pharmacy' | 'generic';

export interface ProjectItem {
  id: string;
  title: string;
  type: ProjectType;
  role: string;
  status?: string;
  isFeatured?: boolean;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  codeUrl?: string; // Optional: Only populated when verified URL is provided
  liveUrl?: string; // Optional: Only populated when verified URL is provided
  schematic?: ProjectSchematic;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  subject?: string;
  tag?: string;
  credentialUrl?: string; // Optional: Only populated when verified URL is provided
  certificateImage?: string; // Optional: Only populated when verified image is provided
  iconType?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization?: string;
  period?: string;
  activities?: string[];
  iconType?: 'prefect' | 'competition' | 'sports' | 'badge' | 'pin' | 'trophy' | 'rocket';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  statusBadge?: string;
  logoType?: 'university' | 'institute' | 'college' | 'school';
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
  angle: number;
}
