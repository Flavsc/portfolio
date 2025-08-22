import { motion, Variants } from 'framer-motion'; // Importe o tipo Variants
import '@styles/components/ProjectCard.scss';

// Define a estrutura de dados para um projeto
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

// Define as props que o componente ProjectCard recebe
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardVariants: Variants = {
    // Adicione a tipagem aqui
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.a
      href={project.link}
      className="project-card"
      variants={cardVariants}
      target="_blank" // Abre o link numa nova aba
      rel="noopener noreferrer"
    >
      <div className="project-image-container">
        <img
          src={project.imageUrl}
          alt={`Imagem do projeto ${project.title}`}
        />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
