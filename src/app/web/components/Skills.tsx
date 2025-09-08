import { motion } from 'framer-motion';
import { Code, Brush, Terminal, GitBranch } from 'lucide-react';
import '@styles/components/Skills.scss';
import { Skill } from '../../types';

const skillsData: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Three.js', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Prisma', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Figma', category: 'design' },
  { name: 'SCSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'Docker', category: 'tools' },
];

const categories = {
  frontend: { icon: <Code />, label: 'Frontend' },
  backend: { icon: <Terminal />, label: 'Backend' },
  tools: { icon: <GitBranch />, label: 'Ferramentas' },
  design: { icon: <Brush />, label: 'Design' },
};

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-grid">
        {Object.entries(categories).map(([key, { icon, label }]) => (
          <motion.div
            key={key}
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="category-header">
              {icon}
              <h3>{label}</h3>
            </div>
            <ul className="skills-list">
              {skillsData
                .filter((skill) => skill.category === key)
                .map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
