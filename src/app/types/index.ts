// Define a estrutura de dados para um projeto
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

// Define a estrutura para uma habilidade (skill)
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}
