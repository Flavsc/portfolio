export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  caseStudy: {
    problem: string;
    solution: string;
  };
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}
