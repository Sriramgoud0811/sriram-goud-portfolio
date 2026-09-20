export type ProjectCategory = 
  | 'ALL'
  | 'DATA ANALYTICS'
  | 'BUSINESS INTELLIGENCE'
  | 'MACHINE LEARNING'
  | 'AI'
  | 'GENERATIVE AI'
  | 'WEB APPLICATIONS';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  tagline: string;
  techStack: string[];
  problem: string;
  solution: string;
  keyFeatures: string[];
  resultImpact: string;
  githubUrl: string;
  liveUrl?: string;
  isFeatured?: boolean;
  metrics?: { label: string; value: string }[];
  visualHighlights?: { label: string; value: string; description: string }[];
  caseStudy: {
    objective: string;
    dataset: string;
    methodology: string;
    dataPreparation: string[];
    analysis: string[];
    mlApproach?: string;
    keyFindings: string[];
    businessValue: string;
  };
}

export interface SkillItem {
  name: string;
  category: 'DATA' | 'ANALYTICS' | 'BI' | 'ML' | 'AI' | 'GENAI' | 'ENGINEERING';
  description: string;
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  id: 'ALL' | 'DATA' | 'ANALYTICS' | 'BI' | 'ML' | 'AI' | 'GENAI' | 'ENGINEERING';
  title: string;
  tag: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  projectTitle: string;
  period: string;
  type: string;
  location: string;
  summary: string;
  metrics: { label: string; value: string }[];
  responsibilities: string[];
  technologies: string[];
  kpis: { name: string; impact: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  iconType: 'aws' | 'salesforce' | 'cambridge' | 'kaggle' | 'google';
}

export interface Achievement {
  id: string;
  title: string;
  headline: string;
  organization: string;
  rank: string;
  poolSize: string;
  percentile: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  highlightBadge: string;
}

export interface PipelineStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  visualArtifact: string;
  deliverableMetric: string;
  businessValue: string;
}
