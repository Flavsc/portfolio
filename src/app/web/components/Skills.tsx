import { motion } from 'framer-motion';
import { Code, Brush, Terminal, PenTool} from 'lucide-react';
import '@styles/components/Skills.scss';
import { Skill } from '../../types';

const skillsData: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'Three.js', category: 'frontend' },
  { name: 'SCSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'Java Springboot', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'SQL', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Figma', category: 'design' },
  { name: 'Adobe Photoshop', category: 'design' },
  { name: 'Adobe Illustrator', category: 'design' },
];

const categories = {
  frontend: { icon: <Code />, label: 'Frontend' },
  backend: { icon: <Terminal />, label: 'Backend' },
  tools: { icon: <PenTool />, label: 'Tools' },
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
