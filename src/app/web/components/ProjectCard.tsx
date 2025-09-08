import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Project } from '../../types';
import { ArrowUpRight, X } from 'lucide-react';
import Portal from './Portal';
import '@styles/components/ProjectCard.scss';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleBodyOverflow = (shouldHide: boolean) => {
      document.body.style.overflow = shouldHide ? 'hidden' : 'unset';
    };

    handleBodyOverflow(isModalOpen);

    return () => {
      handleBodyOverflow(false);
    };
  }, [isModalOpen]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const modalBackdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3, delay: 0.3 } },
  };

  const modalContentVariants: Variants = {
    hidden: { y: '100%' },
    visible: {
      y: '0%',
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      y: '100%',
      transition: { duration: 0.5, ease: [0.45, 0, 0.55, 1] },
    },
  };

  return (
    <>
      {/* CARD COMPACTO */}
      <motion.div className="project-card" variants={cardVariants}>
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
          <div className="project-actions">
            <button
              onClick={() => setIsModalOpen(true)}
              className="details-button"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </motion.div>

      {/* MODAL REFAVORADO COM DUAS COLUNAS */}
      <Portal>
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="project-modal-backdrop"
              variants={modalBackdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="project-modal-content"
                variants={modalContentVariants}
              >
                <button
                  className="modal-close-button"
                  onClick={() => setIsModalOpen(false)}
                >
                  <X size={32} />
                </button>
                <div className="modal-inner-content">
                  {/* COLUNA ESQUERDA: NARRATIVA */}
                  <div className="modal-column-left">
                    <h2 className="modal-title">{project.title}</h2>
                    <div className="modal-case-study">
                      <h4>Desafio</h4>
                      <p>{project.caseStudy.problem}</p>
                      <h4>Solução</h4>
                      <p>{project.caseStudy.solution}</p>
                    </div>
                  </div>
                  {/* COLUNA DIREITA: DADOS E AÇÕES */}
                  <div className="modal-column-right">
                    <div className="modal-image-container">
                      <img
                        src={project.imageUrl}
                        alt={`Imagem do projeto ${project.title}`}
                      />
                    </div>
                    <div className="modal-tech-stack">
                      <h4>Tecnologias</h4>
                      <div className="modal-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="modal-links">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-link-button primary"
                      >
                        Ver Projeto <ArrowUpRight size={16} />
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-link-button secondary"
                      >
                        Ver Código <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
