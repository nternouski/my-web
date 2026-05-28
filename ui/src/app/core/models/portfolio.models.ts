export type Branch = 'main' | 'visual' | 'technical';

export interface TechItem {
  name: string;
  url: string;
}

export interface SkillItem {
  name: string;
  stars: number; // 1–5
}

export interface Project {
  key: string;
  title: string;
  description: string;
  tech: string;
  year: number;
  link: string;
  img: string;
  branch: 'visual' | 'technical';
  icon: string;
}

export interface TerminalEntry {
  input: string;
  output: string;
  timestamp: Date;
}
